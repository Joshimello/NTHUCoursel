<script>
// Icons
import IbmWatsonLanguageTranslator from 'carbon-icons-svelte/lib/IbmWatsonLanguageTranslator.svelte'
import Incomplete from "carbon-icons-svelte/lib/Incomplete.svelte";
// Components
import { Theme, Search, Button, Modal, SelectableTile, Tag, Popover, Checkbox, LocalStorage 
} from 'carbon-components-svelte'
// Custom Components
import CourseFilter from './lib/CourseFilter.svelte'
import CourseSelected from './lib/CourseSelected.svelte'
// Utilities
import Fuse from 'fuse.js'
import GetData from './util/GetDataNthu.ts'
// Data Init
let data = GetData('https://raw.githubusercontent.com/Joshimello/NTHUCoursel/nya/course_data/nthu11123.json')
// Filter Init
let search = '',
	filterName = '',
	filterTeacher = '',
	filterID = '',
	filterEng = false,
	filterTimetable = []
// const fuse = new Fuse(data, {
// 	useExtendedSearch: true,
// 	keys: ['id.department', 'id.class', 'name.en', 'name.zh', 'teacher.en', 'teacher.zh', 'lang']
// })
// $: found = fuse.search({
// 	$and: [
// 		{ 'id.department': `${search}$` },
// 		// { 'id.class': `${filterID}` },
// 		{ 'teacher.en': `${filterTeacher}` },
// 	]
// }).map(i => i.item)
// console.log(found)
$: found = data
	.filter(i => i.id.department.replace(/[0-9]/g, '') == search.toUpperCase())
	.filter(i => (i.name.en.toUpperCase()+i.name.zh).includes(filterName.toUpperCase()))
	.filter(i => JSON.stringify(i.teacher).replace(/[\[\]\{\}",:"en""zh"]/g, '').includes(filterTeacher.toUpperCase()))
	.filter(i => (i.id.department+i.id.class).includes(filterID.toUpperCase()))
	.filter(i => filterEng?i.lang == '英':i)
	.filter(i => filterTimetable.length?filterTimetable.some(j => i.time.includes(j)):i)
$: selected = data.filter(i => i.selected)
let lang_i = 0
let langs = ['en', 'zh']
$: lang = langs[lang_i % langs.length]
let theme_i = 0
let themes = ['g100', 'g80', 'white']
$: theme = themes[theme_i % themes.length]
</script>

<main class="max-h-screen flex flex-col">
	<div class="flex">
		<Search placeholder="Department ID..." bind:value={search} />
		
		<CourseFilter bind:found bind:filterName bind:filterTeacher bind:filterID bind:filterEng bind:filterTimetable />
		
		<CourseSelected bind:selected bind:lang />
		
		<Button kind="tertiary" on:click={()=>{lang_i++}} tooltipPosition="left" iconDescription="{lang.toUpperCase()}" icon={IbmWatsonLanguageTranslator} />
		
		<Button kind="tertiary" on:click={()=>{theme_i++}} tooltipPosition="left" iconDescription="{theme.toUpperCase()}" icon={Incomplete} />
	</div>

	<div class="overflow-auto" role="group">
		{#each found as c, index}
		<SelectableTile bind:selected={data[data.indexOf(c)].selected}>
			<div>
				{c.id.department}
				{c.id.class}
			</div>
			<div>
				{c.name[lang]}
				{#each c.teacher as t}<Tag size="sm">{t[lang]}</Tag>{/each}
			</div>
			<div>
				{#if c.time}{#each c.time as t}<Tag size="sm" type="outline">{t}</Tag>{/each}{/if}
			</div>
		</SelectableTile>
		{/each}
	</div>
</main>

<Theme bind:theme />

<LocalStorage key="lang" bind:value={lang_i}/>
<LocalStorage key="theme" bind:value={theme_i}/>
<LocalStorage key="search" bind:value={search}/>
<LocalStorage key="filterName" bind:value={filterName}/>
<LocalStorage key="filterTeacher" bind:value={filterTeacher}/>
<LocalStorage key="filterID" bind:value={filterID}/>
<LocalStorage key="filterEng" bind:value={filterEng}/>
<LocalStorage key="filterTimetable" bind:value={filterTimetable}/>