// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs/promises';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let blogs;
  if(process.env.ENVIORMENT == "dev") {
    blogs = await fs.readdir("./public/blogdata/", "utf-8")
    console.log(process.cwd())
  }
  else {
    blogs = await fs.readlink("https://blog-templates-demo.vercel.app/blogdata/")
  }

  res.status(200).json({blogs})
}
