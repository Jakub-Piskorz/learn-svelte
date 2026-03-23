<script lang="ts">
	const { data } = $props();
	const user = () => data.user
	let newEventName = $state('');
	let newLocationName = $state('');
	let newOrganizerName = $state('');
</script>

<h1>Admin panel</h1>
<form method="POST">
	<label for="locationName">Add new location</label>
	<input name="locationName" type="text" bind:value={newLocationName} />
</form>
<form method="POST">
	<label for="eventName">Add new event</label>
	<input name="eventName" type="text" bind:value={newEventName} />
</form>
<form method="POST">
	<label for="organizer">Add new organizer</label>
	<input name="organizer" type="text" bind:value={newOrganizerName} />
</form>
