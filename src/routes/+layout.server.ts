import { trpcServer } from '$lib/server/server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	return {
		trpc: trpcServer.hydrateToClient(event),
		session: await event.locals.getSession(),
	};
};
