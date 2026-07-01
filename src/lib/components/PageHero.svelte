<script lang="ts">
	let { title, subtitle = '' }: { title: string; subtitle?: string } = $props();
</script>

<section class="pagehero">
	<h1 class="pagehero__title">{title}</h1>
	{#if subtitle}<p class="pagehero__subtitle">{subtitle}</p>{/if}
</section>

<style>
	.pagehero {
		background: linear-gradient(118deg, #ef6e00 0%, #e94e6a 55%, #8b47b8 100%);
		color: #fff;
		border-radius: var(--radius-lg);
		padding: 52px 24px;
		text-align: center;
	}
	.pagehero__title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: clamp(28px, 4vw, 44px);
		text-shadow: 0 2px 12px rgba(0, 0, 0, 0.16);
	}
	.pagehero__subtitle {
		margin-top: 12px;
		font-weight: 600;
		max-width: 620px;
		margin-inline: auto;
		text-shadow: 0 1px 8px rgba(0, 0, 0, 0.16);
	}
</style>
``