<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import TopBar from '$lib/components/TopBar.svelte';
	import SecondaryNav from '$lib/components/SecondaryNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import CookieBar from '$lib/components/CookieBar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app">
	<TopBar />
	<SecondaryNav />
	<main class="app__main">
		{@render children()}
	</main>
	<Footer />
</div>
<BottomNav />
<CookieBar />

<style>
	@media (max-width: 900px) {
		.app {
			padding-bottom: var(--bottomnav-h);
		}
	}
</style>
