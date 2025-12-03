<script lang="ts">
	export interface LogoProps {
		name?: string | false;
		icon?: string | false;
		product?: string | false;
		sub?: string | false;
	}

	let { name = 'net', icon = '8', product = 'cloud', sub = 'by net8' }: LogoProps = $props();
</script>

<div
	class="inline-flex w-fit flex-col justify-center gap-1 font-serif text-xl text-black select-none dark:text-accent-foreground"
>
	<div class="flex w-full items-center gap-1">
		{#if name}
			<span class="font-semibold text-accent dark:text-accent-foreground">{name}</span>
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
			class="w-full scale-85 text-center font-sans text-xs leading-2 font-bold text-muted-foreground uppercase"
		>
			{sub}
		</div>
	{/if}
</div>
