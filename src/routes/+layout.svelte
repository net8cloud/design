<script lang="ts">
	import { Layout } from '$lib/index.js';
	import '../app.css';

	let { children } = $props();
</script>

<Layout>
	{@render children()}
</Layout>
