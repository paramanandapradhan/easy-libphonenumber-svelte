<script lang="ts">
	import EasyLibphonenumber from '../lib/easy-libphonenumber.svelte';

	function handleLoad(ev: CustomEvent) {
		let libphonenumber: any = ev.detail;
		if (libphonenumber) {
			console.log('libphonenumber loaded', libphonenumber);
		}
	}
</script>

<h1>easy-libphonenumber-svelte lib demo</h1>

<EasyLibphonenumber on:load={handleLoad} />
