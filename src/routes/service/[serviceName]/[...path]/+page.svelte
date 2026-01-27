<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
	const { mfe } = data;
	const body = mfe?.body;
	const head = mfe?.head;
</script>

<svelte:head>
	{#if head}
		<!--eslint-disable-next-line svelte/no-at-html-tags-->
		{@html head}
	{/if}
</svelte:head>

<header>
	<h1>Host Header</h1>
	<h2>Fetched microservice: {mfe?.serviceName || "none"}</h2>
</header>

<main style="padding: 2rem;">
	{#if body}
		<!--eslint-disable-next-line svelte/no-at-html-tags-->
		{@html body}
	{:else}
		<div class="error-box">
			<h2>Error loading {mfe?.serviceName || "none"}</h2>
			<p>{data.error}</p>
		</div>
	{/if}
	<a href={resolve("/")}>Go back to main page</a>
</main>

<footer>Standard Footer</footer>