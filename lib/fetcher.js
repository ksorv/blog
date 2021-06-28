import axios from 'axios';

export const defaultQueryFn = async ({ queryKey }) => {
  const url = `/api${queryKey[0]}`;
  const { data } = await axios.get(url);
  return data;
};
