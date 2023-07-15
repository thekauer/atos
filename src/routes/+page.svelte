<script lang="ts">
	import PlayButton from '$lib/components/PlayButton.svelte';
	import { init } from '$lib/game/ws';
	import { onMount } from 'svelte';
	onMount(() => {
		init();
	});

	import { signOut } from '@auth/sveltekit/client';
</script>

<h1>Hey</h1>

<PlayButton />
<br />
<button on:click={() => signOut()}>Sign Out</button>
