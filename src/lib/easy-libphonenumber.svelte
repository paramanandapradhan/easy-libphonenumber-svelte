<script lang="ts">
	import EasyScriptLoader from '@cloudparker/easy-script-loader-svelte';
	export let scriptUrl: string =
		'https://cdnjs.cloudflare.com/ajax/libs/libphonenumber-js/0.4.42/libphonenumber-js.min.js';

		export let scriptName:string = 'libphonenumber'
</script>

<EasyScriptLoader scriptUrl={scriptUrl} {scriptName}  on:load />
