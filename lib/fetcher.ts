import axios from 'axios';
import { QueryFunction } from 'react-query';

export const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
  const url = `/api${queryKey[0]}`;
  const { data } = await axios.get(url);
  return data;
};
