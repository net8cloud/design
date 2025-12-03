<script lang="ts">
	import { Layout, type NavEntry, type NavigationProps, type NavSection } from '$lib/index.js';
	import { House } from '@lucide/svelte';
	import '$lib/index.css';

	let { children } = $props();

	let entries: NavEntry[] = [
		{
			title: 'Home',
			url: '/',
			description: 'Beautifully designed components built with Tailwind CSS.',
			Icon: House
		},
		{
			title: 'About',
			url: '/about',
			description: 'Learn more about us',
			Icon: House
		},
		{
			title: 'Contact',
			url: '/contact',
			description: 'Get in touch with us',
			Icon: House
		},
		{
			title: 'Home',
			url: '/',
			description: 'Beautifully designed components built with Tailwind CSS.'
		},
		{
			title: 'About',
			url: '/about',
			description: 'Learn more about us'
		},
		{
			title: 'Contact',
			url: '/contact',
			description: 'Get in touch with us'
		}
	];

	let navigation: NavigationProps = {
		logo: {
			product: 'design',
			sub: 'preview'
		},
		sections: [
			{
				title: 'Section One',
				entries,
				large: true
			},
			{
				title: 'Section Two',
				entries
			}
		],
		cta: {
			Icon: House,
			title: 'Get Started',
			url: '/get-started'
		},
		ctaSecondary: {
			title: 'Documentation',
			url: '/docs'
		}
	};
</script>

<Layout footer {navigation}>
	{@render children()}
</Layout>
