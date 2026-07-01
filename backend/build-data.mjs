#!/usr/bin/env node
// ---------------------------------------------------------------------------
// build-data.mjs — backend generator for src/lib/data/mecenat_data2.json
//
// This is the "backend" that assembles the single JSON file powering the
// site's text and image URLs. It keeps a MINIMAL set of attributes per object
// (e.g. a card is just { brand, title, condition, image, url }).
//
// IMPORTANT — why it does NOT scrape mecenat.com:
//   Mecenat's offer copy and photography, and the third-party brand logos
//   (H&M, Apple, ...) shown on their site, are copyrighted / trademarked and
//   owned by Mecenat and those brands. Their terms don't grant a right to copy
//   or re-host that content, and hot-linking their CDN images is both fragile
//   and not yours to serve. So this generator sources from data you own.
//
//   To pull from a source you DO control or are licensed to use, set SOURCE_URL
//   and implement `parseSource()` below. It fetches politely (custom
//   User-Agent, robots.txt aware, rate-limited).
//
// Usage:
//   npm run data                         # validate + normalize the JSON
//   node backend/build-data.mjs          # same
//   SOURCE_URL=https://your-own-source npm run data   # pull from your source
// ---------------------------------------------------------------------------

import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const OUT = resolve(ROOT, 'src/lib/data/mecenat_data2.json');
const SOURCE_FILE = resolve(HERE, 'source.json');

const USER_AGENT = 'studentdeals-data-bot/1.0 (+local prototype)';
const RATE_LIMIT_MS = 1500;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --- Minimal shape helper ---------------------------------------------------

/** Build a minimal offer item in the feed shape used by mecenat_data2.json. */
export function feedItem(brandName, title, opts = {}) {
	const {
		id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
		subtitle = '',
		brandLogo = '',
		brandPagePath = '',
		image = '',
		isCampaign = true,
		validFrom = '',
		validTo = '',
		url = '#',
		partnerUrl = null
	} = opts;
	return {
		id,
		title,
		subtitle,
		brandName,
		brandLogo,
		brandPagePath,
		image,
		isCampaign,
		validFrom,
		validTo,
		url,
		partnerUrl
	};
}

// --- Responsible fetching (opt-in, for sources you control) -----------------

async function isAllowedByRobots(target) {
	try {
		const { origin, pathname } = new URL(target);
		const res = await fetch(new URL('/robots.txt', origin), {
			headers: { 'user-agent': USER_AGENT }
		});
		if (!res.ok) return true; // no robots.txt => treat as allowed
		const txt = await res.text();
		const disallow = [];
		let appliesToUs = false;
		for (const raw of txt.split('\n')) {
			const line = raw.trim();
			if (/^user-agent:/i.test(line)) {
				appliesToUs = line.split(':')[1].trim() === '*';
			} else if (appliesToUs && /^disallow:/i.test(line)) {
				const path = line.slice(line.indexOf(':') + 1).trim();
				if (path) disallow.push(path);
			}
		}
		return !disallow.some((rule) => {
			const re = new RegExp(
				'^' + rule.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*')
			);
			return re.test(pathname);
		});
	} catch {
		return true;
	}
}

async function fetchHtml(url) {
	if (!(await isAllowedByRobots(url))) {
		throw new Error(`Blocked by robots.txt: ${url}`);
	}
	await sleep(RATE_LIMIT_MS);
	const res = await fetch(url, { headers: { 'user-agent': USER_AGENT } });
	if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
	return res.text();
}

/**
 * Implement this for a source you own or are licensed to use. Parse `html`
 * and return `{ lists? }` in the feed shape. Left as a no-op so the generator
 * never copies content you don't have the rights to.
 *
 * Example (using the `feedItem()` helper):
 *   return {
 *     lists: [
 *       { id: 'summer', title: 'Summer', items: [feedItem('Volt', '70% off')] }
 *     ]
 *   };
 */
function parseSource(/* html */) {
	return { lists: [] };
}

// --- Build ------------------------------------------------------------------

const REQUIRED_KEYS = [
	'site',
	'hero',
	'info',
	'primaryNav',
	'bottomNav',
	'lists',
	'footer',
	'pages'
];

function validate(data) {
	const missing = REQUIRED_KEYS.filter((k) => !(k in data));
	if (missing.length) {
		throw new Error(`mecenat_data2.json is missing keys: ${missing.join(', ')}`);
	}
	if (!Array.isArray(data.lists)) throw new Error('lists must be an array');
	for (const l of data.lists) {
		if (!l.id || !l.title || !Array.isArray(l.items)) {
			throw new Error(`Invalid list: ${JSON.stringify(l).slice(0, 80)}`);
		}
	}
	return data;
}

async function loadBase() {
	// Prefer an editable catalog you own; otherwise normalize the existing file.
	const file = existsSync(SOURCE_FILE) ? SOURCE_FILE : OUT;
	const raw = await readFile(file, 'utf8');
	return { data: JSON.parse(raw), from: file };
}

async function main() {
	const { data, from } = await loadBase();

	const url = process.env.SOURCE_URL;
	if (url) {
		console.log(`Fetching your source: ${url}`);
		const scraped = parseSource(await fetchHtml(url));
		if (scraped.lists?.length) data.lists = scraped.lists;
	}

	validate(data);
	await writeFile(OUT, JSON.stringify(data, null, '\t') + '\n', 'utf8');

	const offers = data.lists.reduce((n, l) => n + l.items.length, 0);
	console.log(`\u2713 Wrote ${OUT}`);
	console.log(`  source: ${from}`);
	console.log(`  ${data.lists.length} lists \u00b7 ${offers} offers`);
}

main().catch((err) => {
	console.error('\u2717 build-data failed:', err.message);
	process.exit(1);
});
