<script lang="ts">
	import DiscountCard from './DiscountCard.svelte';
	import type { DiscountCard as DiscountCardData } from '$lib/types';
	let { cards }: { cards: DiscountCardData[] } = $props();
</script>

<section class="cardgrid container">
	{#each cards as card (card.id)}
		<DiscountCard {card} />
	{/each}
</section>

<style>
	.cardgrid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
		gap: 18px;
		padding-block: 28px;
		justify-items: center;
	}
	.cardgrid :global(.card) {
		width: 100%;
		max-width: 260px;
	}
	@media (max-width: 900px) {
		.cardgrid {
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
			gap: 12px;
		}
	}
</style>
