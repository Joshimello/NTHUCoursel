<script>
	import { Button } from 'attractions'
	import { MinusIcon } from 'svelte-feather-icons'
	export let selected
</script>

<main class="flex flex-col bg-purple-300 gap-0.5 rounded-2xl overflow-auto scrollbar-hide box-border border-2 border-purple-300 max-h-70vh">
    {#each selected as c}
    <div class="flex bg-white p-2">
        <div class="flex flex-col">
            <span class="uppercase font-mono">{c.engname}</span>
            <span class="">{c.teacher.join().replaceAll(',', ' ')}</span>
        </div>
        <Button class="ml-auto" small on:click={()=>{selected = selected.filter(i => i != c)}}>
            <MinusIcon size="24" />
        </Button>
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