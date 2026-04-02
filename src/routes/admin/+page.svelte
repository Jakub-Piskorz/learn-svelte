<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';

	const { data, form } = $props();
	const user = () => data.user;
	let newEventName = $state('');
	let newLocationName = $state('');
	let newOrganizerName = $state('');

</script>

<h1 class="font-bold text-xl">Admin panel</h1>
<div class="grid grid-cols-3 gap-5 mt-5 align-items-center justify-content-between">
	<div class="h-59 col-span-3">
		<div class="rounded-md border flex flex-col max-h-full overflow-y-auto">
			<Table.Root>
				<Table.Header class="sticky top-0 z-10 bg-white">
					<Table.Row>
						<Table.Head colspan={1} class="w-1/10">
							<div>Location Id</div>
						</Table.Head>
						<Table.Head colspan={1} class="w-7/10">
							<div>Location name</div>
						</Table.Head>
						<Table.Head colspan={1} class="w-2/10">
						</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each data.locations as location (location.id)}
						<Table.Row>
							<Table.Cell class="cn-table-cell" colspan={1}>
								{location.id}
							</Table.Cell>
							<Table.Cell class="cn-table-cell" colspan={1}>
								{location.name}
							</Table.Cell>
							<Table.Cell class="cn-table-cell" colspan={1}>
								<form method="post" action="?/delete-location" use:enhance>
									<input type="hidden" name="id" value={location.id} required />
									<Button type="submit" size="sm">Remove location</Button>
								</form>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</div>
	<form method="post" action="?/create-location" use:enhance>
		<Card.Root class="w-[300px]">
			<Card.Header>
				<Card.Title>Add new location</Card.Title>
				<Card.Description>Locations are places, where events happen. (Protesty)</Card.Description>
			</Card.Header>
			<Card.Content class="grow-1">
				<Input name="name" type="text" bind:value={newLocationName} placeholder="Location name" />
			</Card.Content>
			<Card.Footer>
				<Button type="submit" class="w-full">Add location</Button>
			</Card.Footer>
		</Card.Root>
		{#if form?.missing}<p class="error">The location name provided</p>{/if}
	</form>

	<form method="post" action="?/create-event" use:enhance>
		<Card.Root class="w-[300px]">
			<Card.Header>
				<Card.Title>Add new event</Card.Title>
				<Card.Description>Events are center to this website. That's what people go to look for</Card.Description>
			</Card.Header>
			<Card.Content class="grow-1">
				<form method="POST">
					<Input name="name" type="text" bind:value={newEventName} placeholder="Event name" />
				</form>
			</Card.Content>
			<Card.Footer>
				<Button type="submit" class="w-full">Add Event</Button>
			</Card.Footer>
		</Card.Root>
	</form>

	<form method="post" action="?/create-organizer" use:enhance>
		<Card.Root class="w-[300px]">
			<Card.Header>
				<Card.Title>Add new organizer</Card.Title>
				<Card.Description>Organizers are organisations or private people who host events.</Card.Description>
			</Card.Header>
			<Card.Content class="grow-1">
				<Input name="name" type="text" bind:value={newOrganizerName} placeholder="Organizer name" />
			</Card.Content>
			<Card.Footer>
				<Button type="submit" class="w-full">Add Organizer</Button>
			</Card.Footer>
		</Card.Root>
	</form>
</div>
