import { NextApiRequest, NextApiResponse } from 'next';

type UserApiCall = (
  req: NextApiRequest,
  res: NextApiResponse<{ name: string }>
) => void;

const user: UserApiCall = async (req, res) => {
  res.json({ name: 'Wallah' });
};

export default user;
