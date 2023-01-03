<script>
import Close from "carbon-icons-svelte/lib/Close.svelte"
import Location from "carbon-icons-svelte/lib/Location.svelte"
import CurrencyDollar from "carbon-icons-svelte/lib/CurrencyDollar.svelte"
import UserMultiple from "carbon-icons-svelte/lib/UserMultiple.svelte"
import {
	Button,
	Tabs,
	Tab,
	TabContent,
	Accordion, 
	AccordionItem,
	Tag,
	ComposedModal,
	ModalHeader,
	Tile
} from 'carbon-components-svelte'

let open = true, tabopen = 0

$: totalCredit = selected.map(i => parseInt(i.credit)).reduce((a, b) => a + b, 0)

const days = ['M', 'T', 'W', 'R', 'F', 'S']
const times = ['1', '2', '3', '4', 'n', '5', '6', '7', '8', '9', 'a', 'b', 'c']

let timetable = {}
times.flatMap(i => days.map(j => j+i)).forEach(i => timetable[i] = [])

$: {
	times.flatMap(i => days.map(j => j+i)).forEach(i => timetable[i] = [])
	selected.forEach(c => c.time?c.time.forEach(t => timetable[t] = [...timetable[t], c]):null)	
}

export let selected, lang
</script>

<Button kind="tertiary" on:click={()=>(open = true)}>Selected: {selected.length}</Button>
<ComposedModal bind:open selectorPrimaryFocus={null} size="{tabopen?'lg':''}">
	<ModalHeader class="sticky" />
	<Tabs bind:selected={tabopen}>
		<Tab><Tag size="sm">{totalCredit}</Tag> Selected</Tab>
		<Tab label="Timetable" />
		<svelte:fragment slot="content">
			<TabContent class="overflow-auto">
				<Accordion>
					{#if selected.length == 0}Woohoo! No classes this semester~{/if}

					{#each selected as c}
					<div class="flex">
						<Button kind="ghost" size="small" icon={Close} on:click={()=>{c.selected =false}} tooltipPosition="right" iconDescription="Remove"/>
						<AccordionItem class="flex-1">
							<svelte:fragment slot="title">
								<Tag size="sm">{c.credit}</Tag>
								<span class="mr-2">{c.name[lang]}</span>
								{#each c.teacher as t}
								<Tag size="sm">{t[lang]}</Tag>
								{/each}
							</svelte:fragment>
							<div class="flex items-center">
								<Location size="24" class="m-2" />
								<Tag type="outline">{c.venue}</Tag>
								{#if c.time}
								{#each c.time as t}
								<Tag type="outline">{t}</Tag>
								{/each}
								{/if}
							</div>
							<div class="flex items-center">
								<UserMultiple size="24" class="m-2" />
								<Tag type="outline">{c.capacity}</Tag>
								<span>{c.limits}</span>
							</div>
						</AccordionItem>
					</div>
					{/each}
				</Accordion>
			</TabContent>
			<TabContent class="overflow-auto">
				<div class="max-h-85vh grid grid-cols-6 gap-1">
					{#each Object.entries(timetable) as [k, v], i}

					{#if [4, 5, 9, 10].map(i => i*6).includes(i)}
					<div class="col-span-full h-1"></div>
					{/if}

					<Tile light class="!min-w-0 px-0 py-2">
						{#each v as c, i}
						<span class="font-mono text-0.75rem block">{c.name[lang]}</span>
						{#if v.length > 1 && i != v.length - 1}<br>{/if}
						{/each}
					</Tile>

					{/each}
				</div>
			</TabContent>
		</svelte:fragment>
	</Tabs>
</ComposedModal>