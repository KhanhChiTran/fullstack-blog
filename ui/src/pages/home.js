import React from "react"
import HomeCarousel from "../components/Carousel"
import Layout from "../components/Layout"
import CardRow from "../components/Row"

const Home = () => {
  return (
    <Layout>
      <HomeCarousel />
      <CardRow />
    </Layout>
  )
}

export default Home
