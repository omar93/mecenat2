<script lang="ts">
	import Icon from './Icon.svelte';
	import type { DiscountCard } from '$lib/types';

	let { card }: { card: DiscountCard } = $props();

	/** Stable hue from the brand name for the image placeholder. */
	function hue(name: string) {
		return [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
	}
</script>

<a class="card" href={card.href} title={card.brand}>
	<div class="card__media" style="--h:{hue(card.brand)}">
		{#if card.image}
			<img class="card__img" src={card.image} alt={card.brand} loading="lazy" />
		{:else}
			<span class="card__ph">{card.brand}</span>
		{/if}
		{#if card.badge}
			<span class="card__badge">{card.badge}</span>
		{/if}
	</div>

	<div class="card__body">
		<div class="card__head">
			{#if card.logo}
				<img class="card__logo" src={card.logo} alt={card.brand} />
			{:else}
				<span class="card__brand">{card.brand}</span>
			{/if}
			<span class="card__info" aria-hidden="true">
				<Icon name="info" size={18} />
			</span>
		</div>

		<p class="card__title">{card.title}</p>

		{#if card.condition}
			<p class="card__cond">{card.condition}</p>
		{/if}

		<span class="btn btn--teal btn--block card__cta">{card.cta ?? 'Till rabatten'}</span>
	</div>
</a>

<style>
	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 232px;
		max-width: 100%;
		flex: 0 0 auto;
		scroll-snap-align: start;
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
	}
	.card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-hover);
	}

	/* Image / placeholder */
	.card__media {
		position: relative;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		background: hsl(var(--h), 60%, 90%);
	}
	.card__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.card__ph {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 12px;
		text-align: center;
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 18px;
		color: hsl(var(--h), 45%, 38%);
	}
	.card__badge {
		position: absolute;
		top: 12px;
		left: 12px;
		padding: 5px 12px;
		background: var(--color-orange);
		color: #fff;
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 12px;
		letter-spacing: 0.02em;
		border-radius: 6px;
	}

	/* Floating white info panel overlapping the image */
	.card__body {
		position: relative;
		z-index: 1;
		margin: -30px 12px 0;
		padding: 14px 14px 16px;
		background: var(--color-bg);
		border-radius: 14px;
		box-shadow: var(--shadow-card);
		text-align: center;
	}

	.card__head {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 28px;
		margin-bottom: 10px;
	}
	.card__brand {
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 17px;
		color: var(--color-text);
	}
	.card__logo {
		max-height: 26px;
		max-width: 65%;
		object-fit: contain;
	}
	.card__info {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		display: inline-flex;
		color: var(--color-text-muted);
	}

	.card__title {
		font-size: 15px;
		line-height: 1.35;
		color: var(--color-text);
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		min-height: 2.7em;
	}
	.card__cond {
		margin-top: 6px;
		font-size: 13px;
		font-weight: 600;
		color: var(--color-orange);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.card__cta {
		margin-top: 14px;
		height: 44px;
		font-size: 15px;
	}

	@media (max-width: 900px) {
		.card {
			width: 168px;
		}
		.card__body {
			margin-inline: 8px;
			padding: 12px 10px 14px;
		}
		.card__title {
			font-size: 14px;
		}
		.card__cta {
			height: 40px;
			font-size: 14px;
		}
	}
</style>
