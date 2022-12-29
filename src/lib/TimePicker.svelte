<script lang="ts">
	const days = ['M', 'T', 'W', 'R', 'F', 'S']
	const times = ['1', '2', '3', '4', 'n', '5', '6', '7', '8', 'a', 'b', 'c']
	const periods = times.flatMap(i => days.map(j => j+i))
	export let TimePickerSelected = []
</script>

<main class="p-2">
	<div class="grid grid-cols-7 text-center">
		<span></span>
		{#each days as day}
		<span class="font-mono">{day}</span>
		{/each}
	</div>
	<div class="grid grid-cols-7 text-center">
		{#each periods as period, index}
		{#if !(index % 6)}{times[index/6]}{/if}
		<input type="checkbox" bind:group={TimePickerSelected} value={period} />
		{/each}
	</div>
</main>