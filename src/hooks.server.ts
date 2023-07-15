import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import type { Handle } from '@sveltejs/kit';
import {
	GITHUB_ID,
	GITHUB_SECRET,
	GOOGLE_ID,
	GOOGLE_SECRET,
	AUTH_SECRET,
} from '$env/static/private';

export const handle = SvelteKitAuth(async (_event) => {
	const authOptions = {
		providers: [
			GitHub({
				clientId: GITHUB_ID,
				clientSecret: GITHUB_SECRET,
			}),
			Google({
				clientId: GOOGLE_ID,
				clientSecret: GOOGLE_SECRET,
			}),
		],
		secret: AUTH_SECRET,
		trustHost: true,
	};
	return authOptions;
}) satisfies Handle;
