import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
	path: path.resolve(import.meta.dirname, './.env')
});

const config: CodegenConfig = {
	overwrite: true,
	schema: [
		{
			// @ts-expect-error because env weird
			[process.env.DATO_ENDPOINT]: {
				headers: {
					Authorization: process.env.DATO_API_KEY
				}
			}
		}
	],
	hooks: {
		afterAllFileWrite: ['prettier --write']
	},
	documents: 'src/lib/graphql/*.graphql',
	generates: {
		'src/lib/graphql/generated/sdk.ts': {
			plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
			config: {
				rawRequest: true,
				useTypeImports: true
			}
		},
		'src/lib/graphql/generated/graphql.schema.json': {
			plugins: ['introspection']
		}
	}
};

export default config;
