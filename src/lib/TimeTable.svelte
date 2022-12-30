<script>
	export let selected

	const days = ['M', 'T', 'W', 'R', 'F', 'S']
	const times = ['1', '2', '3', '4', 'n', '5', '6', '7', '8', '9', 'a', 'b', 'c']

	// timetable init
	let timetable = {}
	times.flatMap(i => days.map(j => j+i)).forEach(i => timetable[i] = [])

	$: {
		times.flatMap(i => days.map(j => j+i)).forEach(i => timetable[i] = [])
		selected.forEach(c => c.time?c.time.forEach(t => timetable[t] = [...timetable[t], c]):null)	
	}

	$: selected, console.log(timetable)

</script>

<main class="max-h-85vh overflow-auto grid grid-cols-6 gap-0.5 p-0.5 text-center bg-purple-300">
	{#each days as day}
	<span class="font-mono">{day}</span>
	{/each}

	{#each Object.entries(timetable) as [k, v], i}

	{#if [4, 5, 9, 10].map(i => i*6).includes(i)}
	<div class="col-span-full h-0.5"></div>
	{/if}

	<div class="bg-white py-2">
		{#each v as c, i}
		<span class="font-mono text-0.75rem block">{c.engname}</span>
		{#if v.length > 1 && i != v.length - 1}<br>{/if}
		{/each}
	</div>

	{/each}
</main>

<style>
	main::-webkit-scrollbar {
		display: none;
	}

	main {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>