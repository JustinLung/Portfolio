import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';
import { __dirname } from './constants.js';
import path from 'path';

dotenv.config({
	path: path.resolve(__dirname, './.env')
});

export const client = new GraphQLClient(process.env.DATO_ENDPOINT || '', {
	headers: {
		Authorization: `Bearer ${process.env.DATO_API_KEY}`
	}
});
