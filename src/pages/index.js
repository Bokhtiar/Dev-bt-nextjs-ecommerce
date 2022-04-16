import Head from "next/head"
import Layout from "../components/Layout"
import Slider from "../components/Slider"

export default function Home() {
  return (
	<div>
      <Layout>
       <Slider />
      </Layout>
	</div>
  )
}
