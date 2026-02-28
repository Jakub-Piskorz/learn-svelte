<script lang="ts">
	import type { PageServerData } from '../../../../.svelte-kit/types/src/routes/demo/lucia/$types';

	let { data }: { data: PageServerData } = $props();
	let event = $state('');
</script>

<h1>Admin page</h1>
<h2>Hi, {data.user.username}!</h2>
<form>
<input type="text" bind:value={event} />
</form>

<form></form>