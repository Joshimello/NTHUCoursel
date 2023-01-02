<script>
import Filter from "carbon-icons-svelte/lib/Filter.svelte"
import TextSmallCaps from "carbon-icons-svelte/lib/TextSmallCaps.svelte"
import User from "carbon-icons-svelte/lib/User.svelte"
import Asterisk from "carbon-icons-svelte/lib/Asterisk.svelte"
import Language from "carbon-icons-svelte/lib/Language.svelte"

import { Search, Button, Popover, Checkbox } from 'carbon-components-svelte'
import TimetableFilter from './TimetableFilter.svelte'

let open = true

export let found, filterName, filterTeacher, filterID, filterEng, filterTimetable
	
</script>

<Button kind="tertiary" icon={Filter} on:click={()=>(open = !open)}>Found: {found.length}</Button>
<div class="relative">
	<Popover bind:open align="bottom-right">
		<Search size="lg" placeholder="Course Name..." icon={TextSmallCaps} bind:value={filterName} />
		<Search size="lg" placeholder="Teacher Name..." icon={User} bind:value={filterTeacher} />
		<Search size="lg" placeholder="Course ID..." icon={Asterisk} bind:value={filterID} />
		<div class="flex items-center">
			<Language class="m-3" fill="var(--cds-icon-02)" />
			<span class="mr-auto">Only English</span>
			<Checkbox class="m-3" bind:checked={filterEng} /> 
		</div>
		<TimetableFilter bind:filterTimetable />
	</Popover>
</div>