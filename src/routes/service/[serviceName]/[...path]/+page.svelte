<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<header>
	<h1>Host Header</h1>
	<h2>Fetched microservice: {data.serviceName}</h2>
</header>

<main style="padding: 2rem;">
	{#if data.mfeHtml}
		<!--eslint-disable-next-line svelte/no-at-html-tags-->
		{@html data.mfeHtml}
	{:else}
		<div class="error-box">
			<h2>Error loading {data.serviceName}</h2>
			<p>{data.error}</p>
		</div>
	{/if}
	<a href={resolve("/")}>Go back to main page</a>
</main>

<footer>Standard Footer</footer>