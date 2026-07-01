<script lang="ts">
	import Listing from '$lib/components/Listing.svelte';
	import { allCards } from '$lib/data/cards';
</script>

<svelte:head><title>Utforska | Studentdeals</title></svelte:head>

<Listing
	title="Utforska"
	subtitle="Bläddra bland tusentals studentrabatter från dina favoritvarumärken."
	cards={allCards}
/>
