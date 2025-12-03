<script lang="ts" module>
	export interface NavigationProps {
		logo?: LogoProps;
		sections: NavSection[];
		cta?: NavEntry;
		ctaSecondary?: NavEntry;
	}
</script>

<script lang="ts">
	import { Logo, type LogoProps } from '$lib/index.js';
	import * as NavigationMenu from '$ui/navigation-menu/index.js';
	import { House } from '@lucide/svelte';
	import type { NavEntry, NavSection } from '$lib/types.js';
	import { Button } from '$ui/button/index.js';

	let { logo, sections, cta, ctaSecondary }: NavigationProps = $props();
</script>

<header
	class="fixed top-2 right-2 left-2 flex h-12 items-center rounded-xl border border-border bg-card px-1.25"
>
	<a href="/" class="basis-1/4 pl-2.75">
		{#if logo}
			<Logo {...logo} />
		{/if}
	</a>

	<NavigationMenu.Root class="max-w-none grow basis-1/2" viewport={false}>
		<NavigationMenu.List>
			{#each sections as section, i (i)}
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>{section.title}</NavigationMenu.Trigger>
					<NavigationMenu.Content>
						<ul
							class={[
								section.large
									? 'grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'
									: 'grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]'
							]}
						>
							{#each section.entries as entry, j (j)}
								<li class={[section.large && j === 0 && 'row-span-3']}>
									<NavigationMenu.Link>
										{#snippet child({ props })}
											<a
												{...props}
												href={entry.url}
												class={[
													'no-underline transition-colors outline-none select-none hover:bg-muted focus:bg-muted',
													section.large && j === 0
														? 'flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md'
														: 'flex items-center gap-3 space-y-1 rounded-md p-3 leading-none'
												]}
											>
												{#if entry.Icon}
													<entry.Icon
														class={[
															section.large && j === 0 ? 'size-12' : 'shink-0 size-5 min-w-5'
														]}
													/>
												{/if}

												{#if section.large && j === 0}
													<div class="mt-4 mb-2 text-lg font-medium">{entry.title}</div>
													<p class="text-sm leading-tight text-muted-foreground">
														{entry.description}
													</p>
												{:else}
													<div class="flex flex-col gap-0.5">
														<div class="text-sm leading-none font-medium">{entry.title}</div>
														<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
															{entry.description}
														</p>
													</div>
												{/if}
											</a>
										{/snippet}
									</NavigationMenu.Link>
								</li>
							{/each}
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
			{/each}
		</NavigationMenu.List>
	</NavigationMenu.Root>

	<div class="flex basis-1/4 items-center justify-end gap-1">
		{#if ctaSecondary}
			<Button variant="secondary" href={ctaSecondary.url}>
				{#if ctaSecondary.Icon}
					<ctaSecondary.Icon />
				{/if}
				{ctaSecondary.title}
			</Button>
		{/if}
		{#if cta}
			<Button class="bg-accent text-accent-foreground hover:bg-accent/80" href={cta.url}>
				{#if cta.Icon}
					<cta.Icon />
				{/if}
				{cta.title}
			</Button>
		{/if}
	</div>
</header>

<div class="mt-16"></div>
