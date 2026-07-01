<script lang="ts">
	import Icon from './Icon.svelte';
	import { brands } from '$lib/data/brands';
	import { slug } from '$lib/utils';

	const INITIAL = 21;
	let expanded = $state(false);
	let visible = $derived(expanded ? brands : brands.slice(0, INITIAL));

	function hue(name: string) {
		return [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
	}
	function linkFor(href: string, name: string) {
		return href && href !== '#' ? href : `/${slug(name)}`;
	}
</script>

<section class="brands container">
	<h2 class="brands__title">Dina studentrabatter</h2>
	<div class="brands__grid">
		{#each visible as b (b.name)}
			<a class="brand" href={linkFor(b.href, b.name)} title={b.name}>
				<span class="brand__tile" style="--h:{hue(b.name)}">
					{#if b.logo}
						<img src={b.logo} alt={b.name} />
					{:else}
						<span class="brand__name">{b.name}</span>
					{/if}
				</span>
			</a>
		{/each}
	</div>
	{#if brands.length > INITIAL}
		<button class="brands__more" onclick={() => (expanded = !expanded)}>
			<span>{expanded ? 'Visa färre' : 'Visa fler'}</span>
			<Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={18} />
		</button>
	{/if}
</section>

<style>
	.brands {
		padding-block: 44px 8px;
		text-align: center;
	}
	.brands__title {
		font-family: var(--font-heading);
		font-weight: 400;
		font-size: 30px;
		margin-bottom: 24px;
	}
	.brands__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 12px;
	}
	.brand__tile {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 92px;
		padding: 10px;
		background: #fff;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		transition:
			box-shadow 0.15s ease,
			transform 0.15s ease;
	}
	.brand:hover .brand__tile {
		box-shadow: var(--shadow-card);
		transform: translateY(-2px);
	}
	.brand__name {
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 16px;
		color: hsl(var(--h), 45%, 42%);
	}
	.brand__tile img {
		max-height: 56px;
		max-width: 80%;
		object-fit: contain;
	}
	.brands__more {
		margin: 28px auto 0;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--color-teal);
		font-family: var(--font-heading);
		font-weight: 500;
		font-size: 15px;
	}
	.brands__more:hover {
		color: var(--color-teal-dark);
	}

	@media (max-width: 900px) {
		.brands__title {
			font-size: 24px;
		}
		.brands__grid {
			grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
		}
		.brand__tile {
			height: 74px;
		}
		.brand__name {
			font-size: 13px;
		}
	}
</style>
