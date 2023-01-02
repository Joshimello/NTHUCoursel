<script>
import IbmWatsonLanguageTranslator from 'carbon-icons-svelte/lib/IbmWatsonLanguageTranslator.svelte'
import { Theme, Search, Button, Modal, SelectableTile, Tag, Popover, Checkbox } from 'carbon-components-svelte'
import data from './util/nthu-formatdata.ts'
import CourseFilter from './lib/CourseFilter.svelte'

let theme = 'g100',
	search = 'cs',
	filterName = '',
	filterTeacher = '',
	filterID = '',
	filterEng = false,
	filterTimetable = []

$: found = data
	.filter(i => i.subject.replace(/[0-9]/g, '') == search.toUpperCase())
	.filter(i => (i.name.en.toUpperCase()+i.name.zh).includes(filterName.toUpperCase()))
	.filter(i => JSON.stringify(i.teacher).replace(/[\[\]\{\}",:"en""zh"]/g, '').includes(filterTeacher.toUpperCase()))
	.filter(i => (i.subject+i.class).includes(filterID.toUpperCase()))
	.filter(i => filterEng?i.lang == '英':i)
	.filter(i => filterTimetable.length?filterTimetable.some(j => i.time.includes(j)):i)

let lang_i = 0
let langs = ['en', 'zh']
$: lang = langs[lang_i % langs.length]

</script>

<main class="max-h-screen flex flex-col">
	<div class="flex">
		<Search placeholder="Department ID..." bind:value={search} />
		<CourseFilter bind:found bind:filterName bind:filterTeacher bind:filterID bind:filterEng bind:filterTimetable />
		<Button kind="tertiary" on:click={()=>(open = true)}>Selected: </Button>
		<Button kind="tertiary" on:click={()=>{lang_i++}} tooltipPosition="left" iconDescription="{lang.toUpperCase()}" icon={IbmWatsonLanguageTranslator} />
	</div>

	<div class="overflow-auto" role="group">
		{#each found as c}
		<SelectableTile bind:selected={c.selected}>
			<div>
				{c.subject}
				{c.class}
			</div>
			<div>
				{c.name[lang]}
				{#each c.teacher as t}
				<Tag size="sm">{t[lang]}</Tag>
				{/each}
			</div>
			<div>
				{#if c.time}
				{#each c.time as t}
				<Tag size="sm" type="outline">{t}</Tag>
				{/each}
				{/if}
			</div>
		</SelectableTile>
		{/each}
	</div>
</main>

<Theme bind:theme />