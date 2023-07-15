<script lang="ts">
	import { joinMatchMaking, leaveMatchMaking } from '$lib/game/ws';

	let inQueue = false;

	const click = () => {
		if (!inQueue) {
			joinMatchMaking();
		} else {
			leaveMatchMaking();
		}
	};
</script>

<button on:click={click}>
	{inQueue ? 'In Queue' : 'Play'}
</button>
