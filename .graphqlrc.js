require('dotenv').config({
    path: __dirname + '/.env',
  });
  
  module.exports = {
    schema: [
      {
        [process.env.DATO_ENDPOINT]: {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.DATO_API_KEY}`,
          },
        },
      },
    ],
    documents: './lib/graphql/**/*.graphql',
    extensions: {
      endpoints: {
        default: {
          url: process.env.DATO_ENDPOINT,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.DATO_API_KEY}`,
          },
        },
      },
      codegen: {
        overwrite: true,
        generates: {
          './lib/generated/graphql.schema.json': {
            plugins: ['introspection'],
          },
          './lib/generated/sdk.ts': {
            plugins: [
              'typescript',
              'typescript-operations',
              'typescript-graphql-request',
              'plugin-typescript-swr',
            ],
            config: {
              fetcher: {
                endpoint: {
                  [process.env.DATO_ENDPOINT]: {
                    headers: {
                      'Content-Type': 'application/json',
                      Accept: 'application/json',
                      Authorization: `Bearer ${process.env.DATO_API_KEY}`,
                    },
                  },
                },
              },
              rawRequest: false,
              inlineFragmentTypes: 'combine',
              skipTypename: false,
              exportFragmentSpreadSubTypes: true,
              dedupeFragments: true,
              preResolveTypes: true,
            },
          },
          './lib/generated/schema.graphql': {
            // for developer lookup (unused)
            plugins: ['schema-ast'],
          },
        },
      },
    },
  };
  
  