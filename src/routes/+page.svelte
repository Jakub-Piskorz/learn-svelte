<script lang="ts">
	import { onMount, type SvelteComponent } from 'svelte';

	let RemoteApp: typeof HTMLElement | null = null;
	onMount(async () => {
		const appModule = await import('remote/remote-app');
		new appModule.default({
			target: RemoteApp,
		})
	});

	let count = 0;
</script>

<h1>Welcome to your library project</h1>
<p>My name is Jacob and this is my first Svelte app.</p>
<a href="/next">Click here to view the next page</a>

{#if (RemoteApp)}
<div bind:this={RemoteApp} />
{/if}
