<script lang="ts">
import Close from "carbon-icons-svelte/lib/Close.svelte";
import { Checkbox } from 'carbon-components-svelte'

const days = ['M', 'T', 'W', 'R', 'F', 'S']
const times = ['1', '2', '3', '4', 'n', '5', '6', '7', '8', '9', 'a', 'b', 'c']
const periods = times.flatMap(i => days.map(j => j+i))
export let filterTimetable

</script>

<main class="p-2">
	<div class="grid grid-cols-[1.5rem,1.5rem,1.5rem,1.5rem,1.5rem,1.5rem,1.5rem] text-center">
		<span class="cursor-pointer" on:click={()=>{filterTimetable = []}}>
			<Close />
		</span>
		{#each days as day}
		<span class="font-mono">{day}</span>
		{/each}
	</div>
	<div class="grid grid-cols-[1.5rem,1.5rem,1.5rem,1.5rem,1.5rem,1.5rem,1.5rem] text-center">
		{#each periods as period, index}
		{#if !(index % 6)}{times[index/6]}{/if}
		<Checkbox class="!m-0" bind:group={filterTimetable} value={period} hideLabel />
		{/each}
	</div>
</main>