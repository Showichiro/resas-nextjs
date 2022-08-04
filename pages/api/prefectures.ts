// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { HttpClient } from 'utils/HttpClient';

const url = process.env.PREFECTURES as string;

type Data = Prefectures.Response | { message: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method } = req;
  if (method === 'GET') {
    const response = await HttpClient.get(url).json<Prefectures.Response>();
    res.status(200).json(response);
  } else {
    res.status(403).json({ message: 'forbidden' });
  }
}
