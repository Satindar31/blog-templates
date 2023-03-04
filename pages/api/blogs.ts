// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs/promises';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const blogs: object = await fs.readdir("./public/blogdata/", "utf-8")
  console.log(process.cwd())
  res.status(200).json({blogs})
}
