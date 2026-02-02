<script lang="ts">
	import { resolve } from '$app/paths';
	import * as Menubar from '$lib/components/ui/menubar';

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

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>File</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>
				New Tab
				<Menubar.Shortcut>⌘T</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Item>New Window</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item>Share</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item>Print</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
