<script lang="ts">
	import '../app.css';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { LayoutData } from './$types';
	import { trpc } from '$lib/trpc';
	import { page } from '$app/stores';
	import SignIn from '$lib/components/SignIn.svelte';

	export let data: LayoutData;

	const queryClient = trpc.hydrateFromServer(data.trpc);
</script>

<QueryClientProvider client={queryClient}>
	{#if $page.data.session}
		<slot />
	{:else}
		<SignIn />
	{/if}
</QueryClientProvider>
