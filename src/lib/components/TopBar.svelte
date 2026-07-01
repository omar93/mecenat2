<script lang="ts">
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';
	import SearchBar from './SearchBar.svelte';
	import { site } from '$lib/data/site';
</script>

<header class="topbar">
	<div class="topbar__inner container">
		<a class="topbar__logo" href="/" aria-label={site.name}>
			<Logo size={30} />
		</a>

		<a class="topbar__openapp" href={site.openApp.href}>{site.openApp.label}</a>

		<nav class="topbar__actions" aria-label="Account">
			<a class="topbar__support" href={site.support.href}>
				<Icon name="help" size={22} />
				<span>{site.support.label}</span>
			</a>
			<a class="btn btn--orange" href={site.signup.href}>{site.signup.label}</a>
			<a class="btn btn--teal" href={site.login.href}>{site.login.label}</a>
		</nav>
	</div>

	<div class="topbar__searchrow container">
		<SearchBar variant="bar" />
		<a class="topbar__iconbtn" href={site.support.href} aria-label={site.support.label}>
			<Icon name="help" size={24} />
		</a>
		<a class="topbar__iconbtn" href={site.login.href} aria-label={site.login.label}>
			<Icon name="user" size={24} />
		</a>
	</div>
</header>

<style>
	.topbar {
		position: sticky;
		top: 0;
		z-index: 50;
		background: #fff;
	}
	.topbar__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--topbar-h);
	}
	.topbar__actions {
		display: flex;
		align-items: center;
		gap: 18px;
	}
	.topbar__support {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-weight: 500;
		font-size: 15px;
	}
	.topbar__support:hover {
		color: var(--color-teal);
	}
	.topbar__openapp,
	.topbar__searchrow,
	.topbar__iconbtn {
		display: none;
	}

	@media (max-width: 900px) {
		.topbar {
			box-shadow: var(--shadow-bar);
		}
		.topbar__inner {
			height: 56px;
		}
		.topbar__actions {
			display: none;
		}
		.topbar__openapp {
			display: inline-flex;
			align-items: center;
			padding: 8px 16px;
			border-radius: var(--radius-pill);
			background: var(--color-teal);
			color: #fff;
			font-family: var(--font-heading);
			font-weight: 500;
			font-size: 14px;
			white-space: nowrap;
		}
		.topbar__searchrow {
			display: flex;
			align-items: center;
			gap: 12px;
			padding-bottom: 10px;
		}
		.topbar__iconbtn {
			display: inline-flex;
			color: var(--color-text);
			flex: none;
		}
	}
</style>
