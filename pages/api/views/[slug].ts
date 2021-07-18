import { NextApiRequest, NextApiResponse } from 'next';
import Fingerprint from 'express-fingerprint';

import nc from 'next-connect';
import { redis } from 'lib/redis';

type FingerPrint = {
  fingerprint: {
    [key: string]: string | number;
  };
};

type ViewsReq = NextApiRequest & FingerPrint;
type ViewsRes = NextApiResponse<{ total?: number; message?: string }>;

const views = nc()
  .use(Fingerprint())
  .get<ViewsReq, ViewsRes>(async (req, res) => {
    try {
      const values = new Set(await redis.smembers(req.url.split('/').pop()));
      res.status(200).json({ total: values.size ?? 0 });
    } catch (e) {
      res.status(500).json({ message: 'Something bad happened!' });
    }
  })
  .post<ViewsReq, NextApiResponse>((req, res) => {
    const { hash } = req.fingerprint;
    const slug = req.url.split('/').pop();

    try {
      redis
        .sadd(slug, hash)
        .then(() => {
          res.status(200).json({ message: 'Already seen it!' });
        })
        .catch((a) =>
          res.status(500).json({ message: 'Something weird happened!' })
        );
    } catch (e) {
      res.status(500).json({ message: 'Something weird happened!' });
    }
  });

export default views;
