<script lang="ts">
	import PageHero from './PageHero.svelte';
	import CardGrid from './CardGrid.svelte';
	import type { DiscountCard as DiscountCardData } from '$lib/types';
	let {
		title,
		subtitle = '',
		cards
	}: { title: string; subtitle?: string; cards: DiscountCardData[] } = $props();
</script>

<div class="container page-top">
	<PageHero {title} {subtitle} />
</div>
<CardGrid {cards} />
