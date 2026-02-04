<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
	const { remoteApp } = data;
	const body = remoteApp?.body;
	const head = remoteApp?.head;
</script>

<svelte:head>
	{#if head}
		<!--eslint-disable-next-line svelte/no-at-html-tags-->
		{@html head}
	{/if}
</svelte:head>

<div>
	{#if body}
		<!--eslint-disable-next-line svelte/no-at-html-tags-->
		{@html body}
	{:else}
		<div class="error-box">
			<h2>Error loading {remoteApp?.serviceName || "none"}</h2>
			<p>{data.error}</p>
		</div>
	{/if}
	<a href={resolve("/")} data-sveltekit-reload>Go back to main page</a>
</div>