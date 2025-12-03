<script lang="ts">
	import {
		LayoutHelpers,
		Navigation,
		Footer,
		ContentFrame,
		favicon as defaultFavicon,
		type NavigationProps
	} from '$lib/index.js';
	import type { Snippet } from 'svelte';

	export interface LayoutProps {
		children?: Snippet;
		footer?: boolean;
		navigation?: NavigationProps;
		favicon?: boolean;
	}

	let { children, footer = true, navigation, favicon = true }: LayoutProps = $props();
</script>

<svelte:head>
	{#if favicon}
		<link rel="icon" href={defaultFavicon} />
	{/if}
</svelte:head>

<LayoutHelpers />

{#if navigation}
	<Navigation {...navigation} />
{/if}

<ContentFrame {children} />

{#if footer}
	<Footer />
{/if}
