import Head from "next/head"
import Layout from "../components/Layout"
import Product from "../components/Product"
import Slider from "../components/Slider"

export default function Home({products}) {
  return (
	<div>
      <Layout>
       <Slider />
       <Product products={products}/>
      </Layout>
	</div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`https://fakestoreapi.com/products`)
  const products = await response.json()
  console.log(products)
  return { props: { products } }
}
