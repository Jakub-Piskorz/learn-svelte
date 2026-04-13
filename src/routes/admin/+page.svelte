<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { resolve } from '$app/paths';

	const { form } = $props();
	let newLocationName = $state('');
	let newOrganizerName = $state('');
</script>

<h1 class="font-bold text-xl">Admin panel</h1>
<div class="grid grid-cols-6 gap-5 mt-5 align-items-center justify-content-between">
	<form method="post" action="?/create-location" class="col-span-2" use:enhance>
		<Card.Root class="w-[300px] h-full">
			<Card.Header>
				<Card.Title>Add new location</Card.Title>
				<Card.Description>Locations are places, where events happen. (Protesty)</Card.Description>
			</Card.Header>
			<Card.Content class="grow-1">
				<Input name="name" required type="text" bind:value={newLocationName} placeholder="Location name" />
			</Card.Content>
			<Card.Footer>
				<Button type="submit" class="w-full">Add location</Button>
			</Card.Footer>
		</Card.Root>
		{#if form?.missing}<p class="error">Something is wrong</p>{/if}
	</form>

	<form method="post" action="?/create-organizer" class="col-span-2" use:enhance>
		<Card.Root class="w-[300px] h-full">
			<Card.Header>
				<Card.Title>Add new organizer</Card.Title>
				<Card.Description>Organizers are organisations or private people who host events.</Card.Description>
			</Card.Header>
			<Card.Content class="grow-1">
				<Input name="name" required type="text" bind:value={newOrganizerName} placeholder="Organizer name" />
			</Card.Content>
			<Card.Footer>
				<Button type="submit" class="w-full">Add Organizer</Button>
			</Card.Footer>
		</Card.Root>
	</form>
	<Button variant="link" href={resolve("/admin/events")}>Events</Button>
</div>
