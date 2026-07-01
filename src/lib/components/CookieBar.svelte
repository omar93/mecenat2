<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		try {
			visible = !localStorage.getItem('cookie-consent');
		} catch {
			visible = true;
		}
	});

	function choose(value: string) {
		try {
			localStorage.setItem('cookie-consent', value);
		} catch {
			/* ignore */
		}
		visible = false;
	}
</script>

{#if visible}
	<div class="cookie" role="dialog" aria-label="Cookieinställningar" aria-modal="false">
		<div class="cookie__inner container">
			<p class="cookie__text">
				Vi använder nödvändiga cookies för att sajten ska fungera. Du kan också tillåta analys- och
				marknadsföringscookies som hjälper oss att förbättra upplevelsen.
			</p>
			<div class="cookie__actions">
				<button class="cookie__ghost" onclick={() => choose('necessary')}>
					Endast nödvändiga
				</button>
				<button class="cookie__ghost" onclick={() => choose('custom')}>Anpassa mina val</button>
				<button class="btn btn--orange" onclick={() => choose('all')}>Godkänn alla</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.cookie {
		position: fixed;
		left: 50%;
		bottom: 16px;
		transform: translateX(-50%);
		z-index: 80;
		width: min(1120px, calc(100% - 24px));
		background: #fff;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
	}
	.cookie__inner {
		display: flex;
		align-items: center;
		gap: 20px;
		padding-block: 16px;
		flex-wrap: wrap;
	}
	.cookie__text {
		flex: 1;
		min-width: 260px;
		font-size: 14px;
		color: var(--color-text-muted);
		line-height: 1.6;
	}
	.cookie__actions {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}
	.cookie__ghost {
		padding: 8px 16px;
		border-radius: var(--radius-pill);
		font-family: var(--font-heading);
		font-weight: 500;
		font-size: 14px;
		color: var(--color-text);
		background: var(--color-muted-bg);
	}
	.cookie__ghost:hover {
		background: #e2e8f0;
	}

	@media (max-width: 900px) {
		.cookie {
			bottom: calc(var(--bottomnav-h) + 12px);
		}
		.cookie__actions {
			width: 100%;
		}
		.cookie__actions .btn,
		.cookie__ghost {
			flex: 1;
			justify-content: center;
		}
	}
</style>
