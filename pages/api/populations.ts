// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, NextConfig } from 'next';
import { HttpClient } from 'utils/HttpClient';
import { object, string } from 'zod';

const requestSchema = object({
  prefCode: string(),
  cityCode: string().optional(),
  addArea: string().optional(),
});

const url = process.env.POPULATIONS as string;

export type SuccessData = { prefCode: number; result: Populations.Response };
export type ErrorData = { message: string };

export type Data = SuccessData | ErrorData;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method, query } = req;
  if (method === 'GET') {
    try {
      const r = requestSchema.parse(query);
      const searchParams: Populations.Request = { ...r, cityCode: r.cityCode ?? '-' };
      const response = await HttpClient.get(url, searchParams).json<Populations.Response>();
      res.status(200).json({ prefCode: Number(searchParams.prefCode), result: response });
    } catch (e) {
      res.status(400).end();
    }
  } else {
    res.status(403).json({ message: 'forbidden' });
  }
}
