<script lang="ts">
	import { resolve } from '$app/paths';
	import {Root, Menu, Trigger, Item, Shortcut, Separator, Content} from '$lib/components/ui/menubar';

	let count = $state(0);
</script>

<h1>Welcome to your library project</h1>
<p>My name is Jacob and this is my first Svelte app.</p>
<a href={resolve('/next')}>Click here to view the next page</a>
<a href={resolve('/service/microservice')} data-sveltekit-reload>Open Microservice page</a>

<button style="background: purple; color: white; padding: 8px 14px; border-radius: 8px;"
				id="next" onclick={() => count++}>
	Count: {count}
</button>

<Root>
	<Menu>
		<Trigger>File</Trigger>
		<Content>
			<Item>
				New Tab
				<Shortcut>⌘T</Shortcut>
			</Item>
			<Item>New Window</Item>
			<Separator />
			<Item>Share</Item>
			<Separator />
			<Item>Print</Item>
		</Content>
	</Menu>
</Root>
