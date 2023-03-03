import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home(data: object[]) {
  const keys = Object.values(data)

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    console.log("useeffect is running");
    if(process.env.ENVIORMENT == "dev"){
      fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
    })
      .then((parsed) => {
        console.log(parsed)
        setBlogs(parsed)
      })
    }
    else if(process.env.ENVIORMENT == "prod"){
      fetch('https://blog-templates-demo.vercel.app/api/blogs').then((a) => {
      return a.json();
    })
      .then((parsed) => {
        console.log(parsed)
        setBlogs(parsed)
      })
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {blogs.map((blogitem) => {
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


// export async function getServerSideProps() {
//   // Fetch data from external API
//   let data;
//   if (process.env.ENVIORMENT == "dev") {
//     const res = await fetch(`http://localhost:3000/api/blogs`)
//     data = await res.json()

//     // Pass data to the page via props

//   }
//   else if (process.env.ENVIORMENT == "prod") {
//     const res = await fetch(`http://blog-templates.vercel.app/api/blogs`)
//     data = await res.json()
//   }
//   return { props: data }

// }