// ---------------------------------------------------------------------------
// Shared types for site data. Edit the data files in src/lib/data/* to plug in
// your own content — these interfaces describe the shape each item must have.
// ---------------------------------------------------------------------------

export interface NavItem {
	label: string;
	href: string;
	/** icon key understood by <Icon name="..." /> */
	icon?: string;
	highlight?: boolean;
}

export interface DiscountCard {
	id: string;
	/** Brand name shown on the card and used for the placeholder image. */
	brand: string;
	/** Offer headline (1–2 lines). */
	title: string;
	/** Small orange condition line, e.g. "Valid online only". */
	condition?: string;
	/** Corner badge label, e.g. "KAMPANJ". */
	badge?: string;
	/** Optional path to the offer image (put files in /static). */
	image?: string;
	/** Optional path to a brand logo shown over the image. */
	logo?: string;
	/** Internal link to the brand detail page. */
	href: string;
	/** Button label, defaults to the row/site default. */
	cta?: string;
	/** External link to the partner's offer. */
	partnerUrl?: string;
	/** ISO date the offer becomes valid. */
	validFrom?: string;
	/** ISO date the offer expires. */
	validTo?: string;
}

export interface CardRow {
	id: string;
	heading: string;
	/** Optional lead paragraph shown under the heading. */
	description?: string;
	seeAllHref?: string;
	cards: DiscountCard[];
}

export interface Banner {
	title: string;
	subtitle: string;
	image: string;
	cta: LinkItem;
}

export interface Brand {
	name: string;
	href: string;
	logo?: string;
}

export interface LinkItem {
	label: string;
	href: string;
}

export interface FooterColumn {
	title?: string;
	links: LinkItem[];
}

export interface SocialLink {
	label: string;
	href: string;
	icon: string;
}
