import { createClient } from "@libsql/client/web";

type TursoEnv = {
	TURSO_DATABASE_URL?: string;
	TURSO_AUTH_TOKEN?: string;
};

export function getTurso(env: TursoEnv) {
	if (!env.TURSO_DATABASE_URL) {
		throw new Error("Missing TURSO_DATABASE_URL");
	}

	if (!env.TURSO_AUTH_TOKEN) {
		throw new Error("Missing TURSO_AUTH_TOKEN");
	}

	return createClient({
		url: env.TURSO_DATABASE_URL,
		authToken: env.TURSO_AUTH_TOKEN,
		fetch: (
			input: Parameters<typeof fetch>[0],
			init?: Parameters<typeof fetch>[1],
		) => {
			const normalizedInit = {
				...init,
				headers: init?.headers ?? {},
			};

			return fetch(input, normalizedInit);
		},
	});
}
