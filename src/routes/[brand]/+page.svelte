<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import CardGrid from '$lib/components/CardGrid.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head><title>{data.brandName} – studentrabatter | Studentdeals</title></svelte:head>

<div class="container page-top">
	<PageHero
		title={data.brandName}
		subtitle={`Studentrabatter och erbjudanden hos ${data.brandName}`}
	/>
	<div class="brandintro">
		<p>
			Som student får du tillgång till exklusiva rabatter hos {data.brandName}. Aktivera ett
			erbjudande nedan och spara direkt – både online och i butik.
		</p>
	</div>
</div>

<CardGrid cards={data.offers} />

<style>
	.brandintro {
		max-width: 720px;
		margin: 28px auto 4px;
		text-align: center;
	}
	.brandintro p {
		color: var(--color-text-muted);
		line-height: 1.8;
		font-size: 16px;
	}
</style>
