# easy-libphonenumber-svelte

Install libphonenumber from CDN when ever required.

# Install

```sh
npm intall @cloudparker/easy-libphonenumber-svelte@latest --save-dev
```

# Usage
```html
<script lang="ts">
	import EasyLibphonenumber from '@cloudparker/easy-libphonenumber-svelte';

	function handleLoad(ev: CustomEvent) {
		let libphonenumber: any = ev.detail;
		if (libphonenumber) {
			console.log('libphonenumber loaded', libphonenumber);
		}
	}
</script>

<h1>easy-libphonenumber-svelte lib demo</h1>

<EasyLibphonenumber
	scriptUrl="https://cdnjs.cloudflare.com/ajax/libs/libphonenumber-js/0.4.42/libphonenumber-js.min.js"
	on:load={handleLoad}
/>

```
