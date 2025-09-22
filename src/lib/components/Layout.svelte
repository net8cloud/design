<script lang="ts">
	import { LayoutHelpers, Navigation, Footer, ContentFrame, favicon } from '$lib/index.js';
	import type { Snippet } from 'svelte';

	let {
		children = undefined,
		footer = true,
		navigation = true
	}: {
		children?: Snippet;
		footer?: boolean;
		navigation?: boolean;
	} = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<LayoutHelpers />

{#if navigation}
	<Navigation />
{/if}

<ContentFrame {children} />

{#if footer}
	<Footer />
{/if}
