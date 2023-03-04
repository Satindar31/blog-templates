// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs/promises';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let blogs;
  blogs = await fs.readdir("./public/blogdata/", "utf-8")
  res.status(200).json({ blogs })
}
