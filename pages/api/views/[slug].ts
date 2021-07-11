import { NextApiRequest, NextApiResponse } from 'next';

type ViewsApiCall = (
  req: NextApiRequest,
  res: NextApiResponse<{ total: number }>
) => void;

const views: ViewsApiCall = async (req, res) => {
  res.json({ total: 100 });
};

export default views;
