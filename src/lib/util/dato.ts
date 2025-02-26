import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.DATO_ENDPOINT;
const API_KEY = process.env.DATO_API_KEY;

if (!API_URL || !API_KEY) {
  throw new Error('Missing DatoCMS API configuration.');
}

export const datoClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

export async function fetchDatoCMS<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  return datoClient.request<T>(query, variables);
}
