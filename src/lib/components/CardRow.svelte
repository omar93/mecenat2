<script lang="ts">
	import DiscountCard from './DiscountCard.svelte';
	import Icon from './Icon.svelte';
	import type { CardRow } from '$lib/types';

	let { row }: { row: CardRow } = $props();
	let scroller = $state<HTMLDivElement>();

	function scroll(dir: number) {
		scroller?.scrollBy({ left: dir * scroller.clientWidth * 0.8, behavior: 'smooth' });
	}
</script>

<section class="cardrow">
	<div class="cardrow__head container">
		<div class="cardrow__heading">
			<h2 class="cardrow__title">{row.heading}</h2>
			{#if row.description}
				<p class="cardrow__desc">{row.description}</p>
			{/if}
		</div>
		{#if row.seeAllHref}
			<a class="cardrow__seeall" href={row.seeAllHref}>Se alla</a>
		{/if}
	</div>
	<div class="cardrow__wrap container">
		<button
			class="cardrow__arrow cardrow__arrow--left"
			aria-label="Föregående"
			onclick={() => scroll(-1)}
		>
			<Icon name="chevron-left" size={24} />
		</button>
		<div class="cardrow__scroll scroll-row" bind:this={scroller}>
			{#each row.cards as card (card.id)}
				<DiscountCard {card} />
			{/each}
		</div>
		<button
			class="cardrow__arrow cardrow__arrow--right"
			aria-label="Nästa"
			onclick={() => scroll(1)}
		>
			<Icon name="chevron-right" size={24} />
		</button>
	</div>
</section>

<style>
	.cardrow {
		margin-top: 26px;
	}
	.cardrow__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		margin-bottom: 2px;
	}
	.cardrow__title {
		font-family: var(--font-heading);
		font-weight: 300;
		font-size: 28px;
	}
	.cardrow__desc {
		color: var(--color-text-muted);
		font-size: 14px;
		margin-top: 2px;
	}
	.cardrow__seeall {
		color: var(--color-teal);
		font-weight: 500;
		font-size: 14px;
		white-space: nowrap;
	}
	.cardrow__seeall:hover {
		text-decoration: underline;
	}
	.cardrow__wrap {
		position: relative;
	}
	.cardrow__arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 2;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: #fff;
		color: var(--color-text);
		box-shadow: var(--shadow-card);
		transition: background 0.15s ease;
	}
	.cardrow__arrow:hover {
		background: var(--color-muted-bg);
	}
	.cardrow__arrow--left {
		left: 0;
	}
	.cardrow__arrow--right {
		right: 0;
	}

	@media (max-width: 900px) {
		.cardrow {
			margin-top: 20px;
		}
		.cardrow__title {
			font-size: 22px;
		}
		.cardrow__arrow {
			display: none;
		}
	}
</style>
