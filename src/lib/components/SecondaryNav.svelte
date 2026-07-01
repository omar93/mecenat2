<script lang="ts">
	import Icon from './Icon.svelte';
	import { primaryNav } from '$lib/data/site';
</script>

<nav class="secnav" aria-label="Primary">
	<div class="secnav__inner container">
		{#each primaryNav as item (item.label)}
			<a class="secnav__link" href={item.href}>
				{#if item.icon}<Icon name={item.icon} size={20} />{/if}
				<span>{item.label}</span>
			</a>
		{/each}
		<button class="secnav__more" aria-label="Mer">
			<Icon name="more-horizontal" size={22} />
		</button>
	</div>
</nav>

<style>
	.secnav {
		background: var(--color-dark);
		color: #fff;
	}
	.secnav__inner {
		display: flex;
		align-items: center;
		gap: 28px;
		height: var(--nav-h);
	}
	.secnav__link {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 15px;
		font-weight: 500;
		color: #fff;
		opacity: 0.95;
		white-space: nowrap;
	}
	.secnav__link:hover {
		opacity: 1;
	}
	.secnav__more {
		color: #fff;
		margin-left: auto;
		display: inline-flex;
		align-items: center;
	}
	@media (max-width: 900px) {
		.secnav {
			display: none;
		}
	}
</style>
