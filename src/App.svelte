<script lang="ts">
	import data from './data/data.json'
	import TimePicker from './lib/TimePicker.svelte'
	import { Card, Button, DropdownShell, Dropdown, TextField, Dialog, Modal } from 'attractions'
	import { ChevronDownIcon, PlusIcon, MinusIcon, SearchIcon, PlusSquareIcon, ArrowRightIcon } from 'svelte-feather-icons'



	// get list of departments
	let departments = Array.from(new Set(data.map(i => i.subject.replace(/[0-9]/g, ''))))



	// sorting part
	let s_deptid = '', s_name = '', s_prof = '', s_time = [];

	$: found = data
		.filter(i => i.subject.replace(/[0-9]/g, '') == s_deptid.toUpperCase())
		.filter(i => i.engname.toUpperCase().includes(s_name.toUpperCase()))
		.filter(i => i.teacher.join().includes(s_prof.toUpperCase()))
		.filter(i => s_time.length?s_time.some(j => i.time.includes(j)):i)

	$: found_count = found.length



	// selected classes part
	let selectOpen = false
	let selected = []
	$: selected_count = selected.length

</script>

<main>
	<!-- top bar -->
	<div class="px-8 sticky top-0 flex bg-white shadow-xl items-center">

		<!-- department id search part -->
		<TextField class="font-mono" type="search" bind:value={s_deptid} />


		<!-- filter part -->
		<DropdownShell let:toggle>
			<Button on:click={toggle}>
				<ChevronDownIcon size="21" class="dropdown-chevron" />
			</Button>
			<Dropdown class="left-0 w-max !rounded-none">
				<TextField class="" type="search" placeholder="name" bind:value={s_name} />
				<TextField class="" type="search" placeholder="prof" bind:value={s_prof} />
				<TimePicker bind:TimePickerSelected={s_time} />
			</Dropdown>
		</DropdownShell>


		<!-- found classes part -->
		<span class="h-full flex items-center px-4"><SearchIcon size="16" />{found_count}</span>


		<!-- selected part -->
		<Button class="ml-auto !font-mono" on:click={()=> selectOpen = true} filled>
			SELECTED: {selected_count}
		</Button>
	</div>


	<!-- body part -->
	<div class="mx-8 mt-4">

		<!-- list possible departments when nothing found -->
		{#if !found.length}
			{#each departments as dept}
			<div class="cursor-pointer font-mono text-lg ml-1" on:click={()=>{s_deptid = dept}}><ArrowRightIcon size="12"/> {dept}</div>
			{/each}
		{/if}

		<!-- found stuff -->
		{#each found as c}
		<Card class="mb-2 flex">
			<div class="flex flex-col">
				<span class="uppercase">{c.engname}</span>
				<span>{c.teacher.join().replace(/,/g, ' ')}</span>
				<span>{c.time}</span>
			</div>
			<Button class="ml-auto" outline on:click={()=>{selected = [...selected, c]}}>
				<PlusIcon size="24" />
			</Button>
		</Card>
		{/each}
	</div>
	

	<!-- modal to show selected -->
	<Modal bind:open={selectOpen} let:closeCallback>
	    <Dialog class="w-9/10" title="Selected" {closeCallback}>
	    	{#each selected as c}
			<Card class="mb-2 flex">
				<div class="flex flex-col">
					<span class="uppercase">{c.engname}</span>
					<span>{c.teacher.join().replace(/,/g, ' ')}</span>
					<span>{c.time}</span>
				</div>
				

				<Button class="ml-auto" outline on:click={()=>{selected = selected.filter(i => i != c)}}>
					<MinusIcon size="24" />
				</Button>
			</Card>
			{/each}
	    </Dialog>
	</Modal>
</main>

<style>

</style>