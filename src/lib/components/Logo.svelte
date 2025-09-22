<script lang="ts">
	let {
		name = 'net',
		icon = '8',
		product = 'cloud',
		sub = 'by net8'
	}: {
		name?: string | false;
		icon?: string | false;
		product?: string | false;
		sub?: string | false;
	} = $props();
</script>

<div
	class="dark:text-accent-foreground inline-flex w-fit select-none flex-col justify-center gap-1 font-serif text-xl text-black"
>
	<div class="flex w-full items-center gap-1">
		{#if name}
			<span class="text-accent dark:text-accent-foreground font-semibold">{name}</span>
		{/if}
		{#if icon}
			<span
				class={[
					'bg-accent',
					'text-accent-foreground',
					'inline-flex',
					'size-6.5',
					'items-center',
					'justify-center',
					'rounded-sm',
					'font-normal'
				]}
				style="width: {1.625 * (icon.length > 1 ? icon.length * 0.6 : icon.length)}rem;"
			>
				{icon}
			</span>
		{/if}
		{#if product}
			<span>{product}</span>
		{/if}
	</div>
	{#if sub}
		<div
			class="text-muted-foreground leading-2 scale-85 w-full text-center font-sans text-xs font-bold uppercase"
		>
			{sub}
		</div>
	{/if}
</div>
