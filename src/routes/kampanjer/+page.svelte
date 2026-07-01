<script lang="ts">
	import Listing from '$lib/components/Listing.svelte';
	import { allCards } from '$lib/data/cards';
</script>

<svelte:head><title>Kampanjer | Studentdeals</title></svelte:head>

<Listing
	title="Kampanjer"
	subtitle="Alla aktuella studentrabatter och erbjudanden samlade på ett ställe."
	cards={allCards}
/>
