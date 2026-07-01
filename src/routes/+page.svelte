<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CardRow from '$lib/components/CardRow.svelte';
	import InfoSection from '$lib/components/InfoSection.svelte';
	import BrandIndex from '$lib/components/BrandIndex.svelte';
	import { cardRows, trendingRow } from '$lib/data/cards';
	import { site } from '$lib/data/site';
</script>

<svelte:head>
	<title>Studentrabatter och erbjudanden | {site.name}</title>
	<meta
		name="description"
		content="Tusentals studentrabatter och erbjudanden samlade på ett ställe."
	/>
</svelte:head>

<div class="container home-hero">
	<Hero />
</div>

<CardRow row={trendingRow} />

{#each cardRows as row (row.id)}
	<CardRow {row} />
{/each}

<InfoSection />
<BrandIndex />

<style>
	.home-hero {
		margin-top: 16px;
	}
</style>
