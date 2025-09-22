<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children = undefined
	}: {
		children?: Snippet;
	} = $props();
</script>

<main>
	{@render children?.()}
</main>
