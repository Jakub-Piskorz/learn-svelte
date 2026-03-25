<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';

	const { data } = $props();
	const user = () => data.user;
	let newEventName = $state('');
	let newLocationName = $state('');
	let newOrganizerName = $state('');
	console.log(user());
</script>

<h1 class="font-bold text-xl">Admin panel</h1>

<div class="grid grid-cols-3 gap-5 mt-5 align-items-center justify-content-between">
<Card.Root class="w-[300px]">
	<Card.Header>
		<Card.Title>Add new location</Card.Title>
		<Card.Description>Locations are places, where events happen. (Protesty)</Card.Description>
	</Card.Header>
	<Card.Content class="grow-1">
		<form method="POST" class="grow-1">
			<Input name="locationName" type="text" bind:value={newLocationName} placeholder="Location name" />
		</form>
	</Card.Content>
	<Card.Footer>
		<Button type="submit" class="w-full">Add location</Button>
	</Card.Footer>
</Card.Root>

<Card.Root class="w-[300px]">
	<Card.Header>
		<Card.Title>Add new event</Card.Title>
		<Card.Description>Events are center to this website. That's what people go to look for</Card.Description>
	</Card.Header>
	<Card.Content class="grow-1">
		<form method="POST">
			<Input name="eventName" type="text" bind:value={newEventName} placeholder="Event name" />
		</form>
	</Card.Content>
	<Card.Footer>
		<Button type="submit" class="w-full">Add Event</Button>
	</Card.Footer>
</Card.Root>

<Card.Root class="w-[300px]">
	<Card.Header>
		<Card.Title>Add new organizer</Card.Title>
		<Card.Description>Organizers are organisations or private people who host events.</Card.Description>
	</Card.Header>
	<Card.Content class="grow-1">
		<form method="POST">
			<Input name="organizerName" type="text" bind:value={newOrganizerName} placeholder="Organizer name" />
		</form>
	</Card.Content>
	<Card.Footer>
		<Button type="submit" class="w-full">Add Organizer</Button>
	</Card.Footer>
</Card.Root>
</div>
