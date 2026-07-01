<script lang="ts">
	import ContentPage from '$lib/components/ContentPage.svelte';
	import { pages } from '$lib/data/pages';
	const p = pages.tavlingar;
</script>

<svelte:head><title>{p.title} | Studentdeals</title></svelte:head>

<ContentPage title={p.title} subtitle={p.subtitle} body={p.body} />
