import { ErrorPage } from '@/components/templates/ErrorPage/ErrorPage';
import { NextPage } from 'next';

export interface ErrorProps {
  statusCode?: number | null;
}

const Error: NextPage<ErrorProps> = props => <ErrorPage />;

export default Error;
