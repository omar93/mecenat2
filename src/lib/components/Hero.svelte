<script lang="ts">
	import SearchBar from './SearchBar.svelte';
	import { hero } from '$lib/data/site';
</script>

<section
	class="hero"
	class:has-image={!!hero.image}
	style={hero.image ? `--hero-img:url(${hero.image})` : ''}
>
	<div class="hero__search">
		<SearchBar variant="hero" />
	</div>
	<div class="hero__content">
		<h1 class="hero__title">{hero.title}</h1>
		<p class="hero__subtitle">{hero.subtitle}</p>
		<a class="btn btn--orange hero__cta" href={hero.cta.href}>{hero.cta.label}</a>
	</div>
</section>

<style>
	.hero {
		position: relative;
		border-radius: var(--radius-lg);
		overflow: hidden;
		min-height: 340px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 84px 24px 40px;
		color: #fff;
		background: linear-gradient(
			118deg,
			#ef6e00 0%,
			#e94e6a 48%,
			#8b47b8 100%
		);
	}
	.hero.has-image {
		background:
			linear-gradient(118deg, rgba(239, 110, 0, 0.72), rgba(160, 60, 130, 0.62)),
			var(--hero-img) center / cover no-repeat;
	}
	.hero__search {
		position: absolute;
		top: 22px;
		left: 50%;
		transform: translateX(-50%);
		width: min(880px, 82%);
	}
	.hero__content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.hero__title {
		font-family: var(--font-heading);
		font-size: clamp(30px, 5vw, 58px);
		font-weight: 700;
		text-transform: uppercase;
		line-height: 1.05;
		letter-spacing: 0.5px;
		text-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
	}
	.hero__subtitle {
		margin-top: 14px;
		font-family: var(--font-body);
		font-weight: 700;
		font-size: clamp(14px, 1.5vw, 19px);
		max-width: 760px;
		text-shadow: 0 1px 8px rgba(0, 0, 0, 0.18);
	}
	.hero__cta {
		margin-top: 22px;
		min-width: 260px;
		height: 42px;
		font-size: 15px;
	}

	@media (max-width: 900px) {
		.hero {
			min-height: 210px;
			padding: 28px 20px 26px;
		}
		.hero__search {
			display: none;
		}
		.hero__cta {
			min-width: 200px;
		}
	}
</style>
