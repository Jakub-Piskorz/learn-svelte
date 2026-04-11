<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select';
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea';

	type FormData = {
		id: string;
		value: string;
	}

	const { data, form } = $props();
	const organizers: FormData[] = $derived(
		data.organizers.map(org => ({ id: String(org.id), value: org.name }))
	);
	const locations: FormData[] = $derived(
		data.locations.map(location => ({ id: String(location.id), value: location.name }))
	);
	let newEventName = $state('');
	let newEventDescription = $state('');
	let newLocationName = $state('');
	let newOrganizerName = $state('');
	let selectedOrganizer: string | undefined = $state();
	let selectedOrganizerName: string | undefined = $derived(
		data.organizers.find(org => String(org.id) === selectedOrganizer)?.name || 'Select an organizer'
	);
	let selectedLocation: string | undefined = $state();
	let selectedLocationName: string | undefined = $derived(
		data.locations.find(location => String(location.id) === selectedLocation)?.name || 'Select a location'
	);
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
		{#if form?.missing}<p class="error">The location name provided</p>{/if}
	</form>

	<form method="post" action="?/create-event" class="col-span-2" use:enhance>
		<Card.Root class="w-[300px] h-full">
			<Card.Header>
				<Card.Title>Add new event</Card.Title>
				<Card.Description>Events are center to this website. That's what people go to look for</Card.Description>
			</Card.Header>
			<Card.Content class="grow-1 flex flex-col gap-2">
				<Input name="name" required type="text" bind:value={newEventName} placeholder="Event name" />
				<Textarea name="description" bind:value={newEventDescription} placeholder="Event description" />
				<Select.Root required type="single" name="selectedOrganizer" bind:value={selectedOrganizer}>
					<Select.Trigger class="w-full">
						{selectedOrganizerName}
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<Select.Label>Organizers</Select.Label>
							{#each organizers as organizer (organizer.id)}
								<Select.Item value={organizer.id} label={organizer.value}>
									{organizer.value}
								</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
				</Select.Root>
				<Select.Root required type="single" name="selectedLocation" bind:value={selectedLocation}>
					<Select.Trigger class="w-full">
						{selectedLocationName}
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<Select.Label>Locations</Select.Label>
							{#each locations as location (location.id)}
								<Select.Item value={location.id} label={location.value}>
									{location.value}
								</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
				</Select.Root>
			</Card.Content>
			<Card.Footer>
				<Button type="submit" class="w-full">Add Event</Button>
			</Card.Footer>
		</Card.Root>
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
</div>
