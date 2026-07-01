<script lang="ts">
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';
	import {
		footerColumns,
		footerBrandLinks,
		socialLinks,
		legalLinks,
		copyright
	} from '$lib/data/site';

	function toTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer class="footer">
	<div class="footer__dots" aria-hidden="true"></div>
	<div class="footer__inner container">
		<div class="footer__top">
			<div class="footer__brand">
				<a href="/" aria-label="Hem"><Logo size={28} /></a>
				<nav class="footer__family" aria-label="Family">
					{#each footerBrandLinks as l, i (l.label)}
						<a href={l.href}>{l.label}</a>{#if i < footerBrandLinks.length - 1}<span
								aria-hidden="true">·</span
							>{/if}
					{/each}
				</nav>
			</div>
			<button class="footer__totop" aria-label="Till toppen" onclick={toTop}>
				<Icon name="chevron-up" size={22} />
			</button>
			<div class="footer__social">
				{#each socialLinks as s (s.label)}
					<a href={s.href} aria-label={s.label}><Icon name={s.icon} size={22} /></a>
				{/each}
			</div>
		</div>

		<div class="footer__cols">
			{#each footerColumns as col (col.title)}
				<div class="footer__col">
					{#if col.title}<h3 class="footer__coltitle">{col.title}</h3>{/if}
					<ul>
						{#each col.links as l (l.label)}
							<li><a href={l.href}>{l.label}</a></li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="footer__bottom">
			<p class="footer__copy">{copyright}</p>
			<nav class="footer__legal" aria-label="Legal">
				{#each legalLinks as l, i (l.label)}
					<a href={l.href}>{l.label}</a>{#if i < legalLinks.length - 1}<span aria-hidden="true"
							>·</span
						>{/if}
				{/each}
			</nav>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: #fff;
		margin-top: 48px;
	}
	.footer__dots {
		height: 8px;
		background-image: radial-gradient(circle, var(--color-border) 1.5px, transparent 1.6px);
		background-size: 16px 8px;
		background-position: center;
	}
	.footer__inner {
		padding-block: 8px 24px;
	}
	.footer__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		flex-wrap: wrap;
		padding-block: 20px;
		border-bottom: 1px solid var(--color-border);
	}
	.footer__brand {
		display: flex;
		align-items: center;
		gap: 20px;
		flex-wrap: wrap;
	}
	.footer__family {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
		color: var(--color-text-muted);
		flex-wrap: wrap;
	}
	.footer__family a:hover {
		color: var(--color-text);
	}
	.footer__totop {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid var(--color-border);
		display: flex;
		align-items: center;
		justify-content: center;
		flex: none;
	}
	.footer__totop:hover {
		background: var(--color-muted-bg);
	}
	.footer__social {
		display: flex;
		gap: 14px;
	}
	.footer__social a:hover {
		color: var(--color-teal);
	}
	.footer__cols {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		padding-block: 30px;
	}
	.footer__coltitle {
		font-family: var(--font-heading);
		font-size: 15px;
		font-weight: 600;
		margin-bottom: 12px;
	}
	.footer__col li {
		margin-bottom: 8px;
	}
	.footer__col a {
		font-size: 14px;
		color: var(--color-text-muted);
	}
	.footer__col a:hover {
		color: var(--color-text);
	}
	.footer__bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		flex-wrap: wrap;
		padding-top: 20px;
		border-top: 1px solid var(--color-border);
	}
	.footer__copy {
		font-size: 13px;
		color: var(--color-text-muted);
	}
	.footer__legal {
		display: flex;
		align-items: center;
		gap: 8px;
		flex-wrap: wrap;
		font-size: 13px;
		color: var(--color-text-muted);
	}
	.footer__legal a:hover {
		color: var(--color-text);
	}

	@media (max-width: 900px) {
		.footer__cols {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
