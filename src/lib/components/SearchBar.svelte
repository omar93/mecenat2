<script lang="ts">
	import Icon from './Icon.svelte';
	import { site } from '$lib/data/site';
	let { variant = 'bar' }: { variant?: 'bar' | 'hero' } = $props();
</script>

<form class="search search--{variant}" role="search" onsubmit={(e) => e.preventDefault()}>
	<Icon name="magnifier" size={20} class="search__icon" />
	<input
		type="search"
		placeholder={site.searchPlaceholder}
		aria-label={site.searchPlaceholder}
	/>
</form>

<style>
	.search {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 100%;
		border-radius: var(--radius-pill);
		background: var(--color-muted-bg);
		padding: 0 16px;
		height: 44px;
	}
	.search :global(.search__icon) {
		flex: none;
		color: var(--color-text-muted);
	}
	.search input {
		flex: 1;
		min-width: 0;
		border: none;
		background: none;
		outline: none;
		font-size: 15px;
		font-weight: 500;
		color: var(--color-text);
	}
	.search input::placeholder {
		color: var(--color-text-muted);
		font-weight: 500;
	}
	.search--hero {
		background: #fff;
		height: 52px;
		box-shadow: var(--shadow-card);
		max-width: 880px;
	}
</style>
