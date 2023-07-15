<script>
	import { signIn } from '@auth/sveltekit/client';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center gap-4">
	<span class="notSignedInText">You are not signed in</span>
	<button on:click={() => signIn('google')}>Google</button>
	<button on:click={() => signIn('github')}>GitHub</button>
</div>
