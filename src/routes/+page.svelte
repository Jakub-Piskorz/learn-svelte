<script>
	import { browser } from '$app/environment';

	let remoteAppTarget;
	if (browser) {
		(async () => {
			// @ts-ignore
			const app = await import('remote/remote-app');
			new app.default({
				target: remoteAppTarget,
			});
		})();
	}

	let count = 0;
</script>

<h1>Welcome to your library project</h1>
<p>My name is Jacob and this is my first Svelte app.</p>
<a href="/next">Click here to view the next page</a>
<div bind:this={remoteAppTarget} />
