import type { CardRow, DiscountCard } from '$lib/types';
import { slug } from '$lib/utils';
import data from './mecenat_data2.json';

// ---------------------------------------------------------------------------
// Discount cards, sourced from mecenat_data2.json (regenerate via `npm run
// data`). Offers are grouped into curated `lists` plus a `trending` row; each
// feed item is mapped onto the DiscountCard shape the components expect.
// Edit the JSON, not this file.
// ---------------------------------------------------------------------------

/** Shape of a single offer in the scraped feed (mecenat_data2.json). */
export interface FeedItem {
	id: string;
	title: string;
	subtitle: string;
	brandName: string;
	brandLogo: string;
	brandPagePath: string;
	image: string;
	isCampaign: boolean;
	validFrom: string;
	validTo: string;
	url: string;
	partnerUrl: string | null;
}

/** Turn a scraped brand path ("/se/zalando") into an internal route. */
function internalHref(item: FeedItem): string {
	const path = item.brandPagePath.replace(/^\/se(?=\/|$)/, '');
	return path || `/${slug(item.brandName)}`;
}

function toCard(item: FeedItem, id: string): DiscountCard {
	return {
		id,
		brand: item.brandName,
		title: item.title,
		condition: item.subtitle || undefined,
		badge: item.isCampaign ? 'KAMPANJ' : undefined,
		image: item.image || undefined,
		logo: item.brandLogo || undefined,
		href: internalHref(item),
		partnerUrl: item.partnerUrl || undefined,
		validFrom: item.validFrom,
		validTo: item.validTo
	};
}

/** Curated horizontal rows on the homepage. */
export const cardRows: CardRow[] = data.lists.map((list) => ({
	id: list.id,
	heading: list.title,
	description: list.description || undefined,
	seeAllHref: '/kampanjer',
	cards: list.items.map((item, i) => toCard(item, `${list.id}-${i}`))
}));

/** "Trending" row, highlighted on the homepage. */
export const trendingRow: CardRow = {
	id: 'trending',
	heading: 'Trendar just nu \uD83D\uDD25',
	description: 'Rabatterna som flest studenter håller koll på just nu.',
	seeAllHref: '/utforska',
	cards: data.trending.map((item, i) => toCard(item, `trending-${i}`))
};

/** Flattened, de-duplicated list of every unique offer — for listing pages. */
export const allCards: DiscountCard[] = (() => {
	const seen = new Set<string>();
	const out: DiscountCard[] = [];
	for (const list of data.lists) {
		for (const item of list.items) {
			if (seen.has(item.id)) continue;
			seen.add(item.id);
			out.push(toCard(item, item.id));
		}
	}
	for (const item of data.trending) {
		if (seen.has(item.id)) continue;
		seen.add(item.id);
		out.push(toCard(item, item.id));
	}
	return out;
})();
