<script lang="ts">
	import './layout.css';
	import '../app.css';

	const { children } = $props();
</script>

<main class="bg-blue-950 h-dvh text-white font-bold px-24 py-12 text-center flex items-center flex-col gap-2 w-dvw" >
{@render children()}
</main>
