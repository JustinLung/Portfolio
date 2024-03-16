import { GraphQLClient } from 'graphql-request';

import { getSdkWithHooks } from '@lib/generated/sdk';

const nextGraphQlClient = new GraphQLClient(process.env.DATO_ENDPOINT || '', {
  headers: {
    Authorization: `Bearer ${process.env.DATO_API_KEY}`,
  },
});

// Use this server side, it directly calls the Umbraco GraphQL endpoint
export const nextClient = getSdkWithHooks(nextGraphQlClient);
