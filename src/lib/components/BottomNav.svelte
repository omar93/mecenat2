<script lang="ts">
	import Icon from './Icon.svelte';
	import { bottomNav } from '$lib/data/site';
	import { page } from '$app/state';
</script>

<nav class="bottomnav" aria-label="Mobil">
	{#each bottomNav as item (item.label)}
		<a
			class="bottomnav__link"
			class:active={page.url.pathname === item.href}
			href={item.href}
		>
			{#if item.icon}<Icon name={item.icon} size={24} />{/if}
			<span>{item.label}</span>
		</a>
	{/each}
</nav>

<style>
	.bottomnav {
		display: none;
	}
	@media (max-width: 900px) {
		.bottomnav {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 50;
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: var(--bottomnav-h);
			background: #fff;
			box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08);
		}
		.bottomnav__link {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 3px;
			font-size: 10px;
			font-weight: 500;
			text-transform: uppercase;
			letter-spacing: 0.3px;
			color: var(--color-text);
			flex: 1;
		}
		.bottomnav__link.active {
			color: var(--color-teal);
		}
	}
</style>
