<script lang="ts">
	// import '../app.css';
	import '../layout.css';
	import { resolve } from '$app/paths';
	import logo from '$lib/images/logo.png';

	const { children } = $props();
</script>
<div class="grid grid-rows-[100px_1fr_50px] min-h-dvh w-dvw">
	<header class="flex flex-row gap-5 items-center py-2 px-4 border-b-6 mb-4 border-black bg-background">
		<a class="text-3xl w-5xl m-auto relative font-bold flex h-full items-center" href={resolve("/")}>
			<img src={logo} alt="logo" class="object-contain h-36 self-baseline absolute top-0 left-[-170px]" />
			<div>Protesty.pl</div>
		</a>
	</header>
	<main class="py-5 w-5xl m-auto h-full flex flex-col gap-2 items-start justify-items-start">
		{@render children()}
	</main>
	<footer class="flex flex-row items-center gap-5 border-t py-2 px-4 bg-background">
		<p>Website made by Jakub Piskorz. All rights reserved.</p>
	</footer>
</div>