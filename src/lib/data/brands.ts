import type { Brand } from '$lib/types';
import type { FeedItem } from './cards';
import { slug } from '$lib/utils';
import data from './mecenat_data2.json';

// ---------------------------------------------------------------------------
// Brand index for the "Dina studentrabatter" section, derived from every offer
// in mecenat_data2.json (regenerate via `npm run data`). Brands are
// de-duplicated by name and sorted; an empty logo falls back to an initials
// tile automatically.
// ---------------------------------------------------------------------------

const byName = new Map<string, Brand>();

function add(item: FeedItem) {
	if (byName.has(item.brandName)) return;
	const path = item.brandPagePath.replace(/^\/se(?=\/|$)/, '');
	byName.set(item.brandName, {
		name: item.brandName,
		href: path || `/${slug(item.brandName)}`,
		logo: item.brandLogo || undefined
	});
}

for (const list of data.lists) for (const item of list.items) add(item);
for (const item of data.trending) add(item);

export const brands: Brand[] = [...byName.values()].sort((a, b) =>
	a.name.localeCompare(b.name, 'sv')
);
