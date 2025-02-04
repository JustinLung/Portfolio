import { getSdk } from '$lib/graphql/generated/sdk';
import { GraphQLClient } from 'graphql-request';
import { DATO_ENDPOINT, DATO_API_KEY } from '$env/static/private';

const graphqlClient = new GraphQLClient(DATO_ENDPOINT, {
	headers: {
		Authorization: DATO_API_KEY
	}
});

export const client = getSdk(graphqlClient);
