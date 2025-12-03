<script>
	import { Logo } from '$lib/index.js';
</script>

<p class="text-2xl">TailwindCSS supported :)</p>

<div class="flex flex-col gap-4 p-4">
	<Logo sub={false} />
	<Logo name="docs" product={false} />
	<Logo product="storage" sub={false} />
	<Logo product="design" sub={false} />
	<Logo icon="12" sub="more is better lol" />
	<Logo icon="999" sub="just because" />
</div>
