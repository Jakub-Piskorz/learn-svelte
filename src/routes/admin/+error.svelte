<script lang="ts">
	import { page } from '$app/state';
	console.log(page.error)
</script>

<h1>{page.error.message}</h1>
