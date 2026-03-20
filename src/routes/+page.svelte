<script lang="ts">
	import { resolve } from '$app/paths';

	let name = $state('');
	let count = $state(0);
	const onSend = async (name: string) => {
		await fetch("/api/admin/create-organizer", {
			method: 'POST',
			body: JSON.stringify({
				name
			})
		})
	}
</script>

<h1>Welcome to your library project</h1>
<p>My name is Jacob and this is my first Svelte app.</p>
<a href={resolve('/next')}>Click here to view the next page</a>
<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a href='/service/microservice' data-sveltekit-reload>Open Microservice page</a>

<button style="background: purple; color: white; padding: 8px 14px; border-radius: 8px;"
				id="next" onclick={() => count++}>
	Count: {count}
</button>
<input type="text" id="name" bind:value={name} />
<button style="background: purple; color: white; padding: 8px 14px; border-radius: 8px;"
	onclick={() => onSend(name)}
>
	Wyślij
</button>
