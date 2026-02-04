<script lang="ts">
	// import '../app.css';
	import '../layout.css';
	import { resolve } from '$app/paths';

	const { children } = $props();
</script>
<div class="grid grid-rows-[50px_1fr_50px] min-h-dvh w-dvw">
	<header class="flex flex-row gap-5 items-center shadow-md py-2 px-4 border-b bg-background">
		<a class="text-lg font-bold" href={resolve("/")}>Protesty.pl</a>
	</header>
	<main class="py-5 w-5xl m-auto h-full flex flex-col gap-2 items-start justify-items-start">
		{@render children()}
	</main>
	<footer class="flex flex-row items-center gap-5 border-t py-2 px-4 bg-background">
		<p>Website made by Jakub Piskorz. All rights reserved.</p>
	</footer>
</div>