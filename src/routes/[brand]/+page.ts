import type { PageLoad } from './$types';
import { allCards } from '$lib/data/cards';
import { brands } from '$lib/data/brands';
import { slug } from '$lib/utils';
import type { DiscountCard } from '$lib/types';

export const load: PageLoad = ({ params }) => {
	const brandSlug = params.brand;
	const brandName =
		brands.find((b) => slug(b.name) === brandSlug)?.name ??
		allCards.find((c) => slug(c.brand) === brandSlug)?.brand ??
		brandSlug.charAt(0).toUpperCase() + brandSlug.slice(1);

	let offers: DiscountCard[] = allCards.filter((c) => slug(c.brand) === brandSlug);
	if (offers.length === 0) {
		offers = [1, 2, 3].map((i) => ({
			id: `${brandSlug}-${i}`,
			brand: brandName,
			badge: 'KAMPANJ',
			title: `Studentrabatt hos ${brandName}`,
			condition: 'Gäller online',
			href: `/${brandSlug}`
		}));
	}

	return { brandName, brandSlug, offers };
};
