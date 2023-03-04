// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs/promises';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug } = req.query
  try {
    const file = await fs.readFile(process.cwd() + "blogdata/" + slug, "utf-8")
    console.log(process.cwd())
    const fileParsed = await JSON.parse(file)
    res.status(200).send({ fileParsed })
  }
  catch(err) {
     (err)
    res.status(200).send({err})
  }
  

}
