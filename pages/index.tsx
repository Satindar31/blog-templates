import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home(data: any) {

  const [blogs, setBlogs] = useState([])
  console.log(typeof data)
  let dataA = Object.values(data.data.blogs)
  console.log(typeof dataA)
  console.log(dataA)



  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {dataA.map((blogitem: any) => {
          return <div key={blogitem}>
            <Link href={`api/getBlog?slug=${blogitem}`}>
              <h3 className={styles.blogItemh3}>{blogitem}</h3></Link>
            <p className={styles.blogItemp}>{blogitem}</p>
          </div>
        })}
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  let data;

  if (process.env.ENVIORMENT == "dev") {
    data = await fetch("http://localhost:3000/api/blogs")
    data = await data.json()
    console.log(data.blogs)
  }
  else if (process.env.ENVIORMENT == "prod") {
    data = await fetch("https://blog-templates-demo.vercel.app/api/blogs")
    console.log(data)
    data = await data.json()
    console.log(data.blogs)
    data = data.blogs
  }

  return { props: {data} }
}
