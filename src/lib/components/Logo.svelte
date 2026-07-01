<script lang="ts">
	import { site } from '$lib/data/site';
	// Placeholder wordmark logo — swap for your own image/SVG.
	let { size = 30 }: { size?: number } = $props();
</script>

<span class="logo" style="--s:{size}px">
	<svg viewBox="0 0 34 24" class="logo__mark" aria-hidden="true">
		<rect x="0.5" y="3" width="15" height="11.5" rx="2.5" fill="var(--color-teal)" />
		<rect x="9" y="9" width="15" height="11.5" rx="2.5" fill="var(--color-dark)" />
	</svg>
	<span class="logo__word">{site.name}</span>
</span>

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}
	.logo__mark {
		width: calc(var(--s) * 1.4);
		height: var(--s);
		flex: none;
	}
	.logo__word {
		font-family: var(--font-heading);
		font-weight: 400;
		font-size: calc(var(--s) * 0.82);
		color: var(--color-text);
		letter-spacing: 0.2px;
	}
</style>
