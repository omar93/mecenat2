<script lang="ts">
	import { infoSection } from '$lib/data/site';
</script>

<section class="info container">
	<div class="info__text">
		<h2 class="info__title">{infoSection.title}</h2>
		{#each infoSection.paragraphs as p (p)}
			<p class="info__p">{p}</p>
		{/each}
		<a class="info__link" href={infoSection.cta.href}>{infoSection.cta.label}</a>
	</div>
	<div
		class="info__media"
		class:info__media--ph={!infoSection.image}
		style={infoSection.image ? `background-image:url(${infoSection.image})` : ''}
	></div>
</section>

<style>
	.info {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 40px;
		align-items: center;
		padding-block: 56px;
	}
	.info__title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 24px;
		margin-bottom: 16px;
	}
	.info__p {
		color: var(--color-text-muted);
		margin-bottom: 14px;
		line-height: 1.7;
		font-size: 15px;
	}
	.info__link {
		display: inline-block;
		margin-top: 6px;
		color: var(--color-teal);
		font-weight: 600;
	}
	.info__link:hover {
		text-decoration: underline;
	}
	.info__media {
		border-radius: var(--radius-lg);
		min-height: 320px;
		background-size: cover;
		background-position: center;
	}
	.info__media--ph {
		background: linear-gradient(135deg, #10a5c5 0%, #6a5bd0 55%, #8b47b8 100%);
	}

	@media (max-width: 900px) {
		.info {
			grid-template-columns: 1fr;
			gap: 24px;
			padding-block: 36px;
		}
		.info__media {
			min-height: 220px;
		}
	}
</style>
