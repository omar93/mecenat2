import type { NavItem, FooterColumn, SocialLink, LinkItem, Banner } from '$lib/types';
import data from './mecenat_data2.json';

// ---------------------------------------------------------------------------
// Global site configuration, sourced from mecenat_data.json (regenerate via
// `npm run data`). The JSON keeps a minimal set of fields; this module maps
// them onto the shapes the components expect. Edit the JSON, not this file.
// ---------------------------------------------------------------------------

const link = (label: string, href = '#'): LinkItem => ({ label, href });

export const site = {
	name: data.site.name,
	searchPlaceholder: data.site.searchPlaceholder,
	openApp: link(data.site.openApp),
	support: link(data.site.support),
	signup: link(data.site.signup),
	login: link(data.site.login)
};

/** Featured campaign banner from the offer feed. */
export const banner: Banner = {
	title: data.banner.title,
	subtitle: data.banner.subtitle,
	image: data.banner.image,
	cta: link(data.banner.linkText, data.banner.link)
};

// The homepage hero is driven by the current campaign banner, falling back to
// the evergreen copy in the JSON when no banner is present.
export const hero = {
	title: data.banner?.title ?? data.hero.title,
	subtitle: data.banner?.subtitle ?? data.hero.subtitle,
	cta: data.banner ? link(data.banner.linkText, data.banner.link) : link(data.hero.cta),
	/** Optional background photo (URL or /static path). Falls back to a gradient. */
	image: data.banner?.image ?? data.hero.image
};

export const infoSection = {
	title: data.info.title,
	paragraphs: data.info.paragraphs,
	cta: link(data.info.cta),
	/** Optional image (URL or /static path). Falls back to a gradient. */
	image: data.info.image
};

/** Dark secondary navigation (desktop). */
export const primaryNav: NavItem[] = data.primaryNav;

/** Fixed bottom navigation (mobile). */
export const bottomNav: NavItem[] = data.bottomNav;

export const footerBrandLinks: LinkItem[] = data.footer.family;

export const footerColumns: FooterColumn[] = data.footer.columns;

export const socialLinks: SocialLink[] = data.footer.social;

export const legalLinks: LinkItem[] = data.footer.legal;

export const copyright = `© Copyright ${new Date().getFullYear()} - ${site.name}. All rights reserved`;
