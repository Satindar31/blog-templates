// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs/promises';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const blogs: object = await fs.readdir("./blogdata/", "utf-8")
  res.status(200).json(JSON.parse(JSON.stringify(blogs)))
}
