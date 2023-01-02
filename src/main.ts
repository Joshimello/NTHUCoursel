import "carbon-components-svelte/css/all.css";
import 'virtual:windi.css'

import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
