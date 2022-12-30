<script lang="ts">
	import data from './data/data.json'
	import TimePicker from './lib/TimePicker.svelte'
	import TimeTable from './lib/TimeTable.svelte'
	import SelectedList from './lib/SelectedList.svelte'
	import { Card, Button, DropdownShell, Dropdown, TextField, Dialog, Modal, Switch } from 'attractions'
	import { ChevronDownIcon, PlusIcon, MinusIcon, SearchIcon, CheckCircleIcon, ArrowRightIcon, ClockIcon } from 'svelte-feather-icons'



	// get list of departments
	let departments = Array.from(new Set(data.map(i => i.subject.replace(/[0-9]/g, ''))))


	// sorting part
	let s_deptid='', s_name='', s_teacher='', s_classid='', s_eng=false, s_time=[]

	$: found = data
		.filter(i => i.subject.replace(/[0-9]/g, '') == s_deptid.toUpperCase())
		.filter(i => (i.engname.toUpperCase()+i.chiname).includes(s_name.toUpperCase()))
		.filter(i => i.teacher.join().includes(s_teacher.toUpperCase()))
		.filter(i => (i.subject+i.class).includes(s_classid.toUpperCase()))
		.filter(i => s_time.length?s_time.some(j => i.time.includes(j)):i)
		.filter(i => s_eng?i.lang == '英':i)

	$: found_count = found.length


	// selected classes part
	let selectOpen = false
	let selected = []


	let timetableOpen = false

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
				<div class="flex p-2">
					<span class="font-mono mr-auto">Filters</span>
					<span class="font-mono mr-1">ENG</span>
					<Switch bind:value={s_eng}></Switch>
				</div>
				<TextField type="search" placeholder="Name" bind:value={s_name} />
				<TextField type="search" placeholder="Teacher" bind:value={s_teacher} />
				<TextField type="search" placeholder="Class ID" bind:value={s_classid} />
				
				<TimePicker bind:TimePickerSelected={s_time} />
			</Dropdown>
		</DropdownShell>


		<!-- found classes part -->
		<span class="h-full flex items-center px-4">
			<SearchIcon size="16" />
			<span>{found_count}</span>
		</span>


		<!-- selected -->
		<Button class="ml-auto" on:click={()=>selectOpen=true} outline>
			<span>{selected.length}</span>
			<CheckCircleIcon class="ml-1" size="16" />
		</Button>

		<Modal bind:open={selectOpen} let:closeCallback>
		    <Dialog class="w-9/10" title="Selected" {closeCallback}>
			    <SelectedList bind:selected={selected} />
		    </Dialog>
		</Modal>


		<!-- timetable -->
		<Button class="ml-2" on:click={()=>timetableOpen=true} outline>
			<ClockIcon size="16" />
		</Button>

		<Modal bind:open={timetableOpen} let:closeCallback>
		    <Dialog class="w-9/10" title="Timetable" {closeCallback}>
	    		<TimeTable bind:selected={selected} />
		    </Dialog>
		</Modal>
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
</main>

<style>

</style>