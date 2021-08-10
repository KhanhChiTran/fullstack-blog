import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import BlogComponent from "../components/BlogComponent"
import axios from "axios"

function Blog() {
  const [allPosts, setAllPosts] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/get-all-posts")
      .then(res => setAllPosts(res.data.allPosts))
      .catch(err => console.log(err))
  }, [])

  return (
    <Layout>
      <BlogComponent allPosts={allPosts} />
    </Layout>
  )
}

export default Blog
