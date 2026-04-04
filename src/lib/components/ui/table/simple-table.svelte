<script lang="ts">
	import * as Table from '$lib/components/ui/table/index';
	import type { ClassValue } from 'svelte/elements';

	export type Row = {
		id: string | number;
		[key: string]: string | number;
	}

	type Props = { rows: Row[], class?: ClassValue, id?: string, columns: string[] }

	const { rows, class: className, id, columns }: Props = $props();
</script>


<div id={id} class={className}>
	<Table.Root>
		<Table.Header class="sticky top-0 z-10 bg-white">
			<Table.Row>
				{#each columns as column, i (i)}
					<Table.Head colspan={1}>
						<div>{column}</div>
					</Table.Head>
				{/each}
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each rows as row (row.id)}
				<Table.Row>
					{#each Object.values(row) as cell, i (i)}
						<Table.Cell class="cn-table-cell leading-8" colspan={1}>
							{cell}
						</Table.Cell>
					{/each}
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>