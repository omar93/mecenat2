<script lang="ts">
	import PageHero from './PageHero.svelte';
	let {
		title,
		subtitle = '',
		body = []
	}: { title: string; subtitle?: string; body?: string[] } = $props();
</script>

<div class="container page-top">
	<PageHero {title} {subtitle} />
	<div class="content">
		{#each body as p (p)}
			<p>{p}</p>
		{/each}
	</div>
</div>

<style>
	.content {
		max-width: 760px;
		margin: 32px auto 56px;
	}
	.content p {
		color: var(--color-text-muted);
		line-height: 1.8;
		margin-bottom: 16px;
		font-size: 16px;
	}
</style>
