<script lang="ts">
	import Listing from '$lib/components/Listing.svelte';
	import { allCards } from '$lib/data/cards';

	const newest = [...allCards].reverse();
</script>

<svelte:head><title>Nyheter | Studentdeals</title></svelte:head>

<Listing
	title="Nya studentrabatter"
	subtitle="De senaste erbjudandena, uppdaterade varje vecka."
	cards={newest}
/>
