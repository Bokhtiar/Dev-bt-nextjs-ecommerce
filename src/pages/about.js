import React from 'react'
import Layout from '../components/Layout'

export default function about({data}) {

  


  return (
    <div>
      <Layout>about us
      {
        data.map((dt, index)=>
          <li>{dt.title}</li>
        )
      }
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const res1 = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res1.json()
  console.log(data)
  return { 
      props: { 
          data,
      } 
  }

}