<script lang="ts">
	import EasyScriptLoader from '@cloudparker/easy-script-loader-svelte';
	export let scriptUrl: string =
		'https://cdnjs.cloudflare.com/ajax/libs/libphonenumber-js/0.4.42/libphonenumber-js.min.js';
</script>

<EasyScriptLoader script={scriptUrl} scriptName={'libphonenumber'} on:load />
