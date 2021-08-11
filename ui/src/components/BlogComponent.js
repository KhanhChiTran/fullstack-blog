import React from "react"
import BlogCard from "./Card"
import { Container, Row, Col } from "react-bootstrap"
import Img1 from "../images/home1.jpg"
import Img2 from "../images/home2.jpg"
import Img3 from "../images/happydog.jpg"
import Img4 from "../images/happy3.jpg"
import Img5 from "../images/happy1.jpg"

export default function BlogComponent({ allPosts }) {
  console.log(allPosts)
  return (
    <Container>
      <a href="">
        <h2>Editor's Choices</h2>
      </a>
      <Row className="g-4 ">
        {allPosts.map((post, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <BlogCard Img={Img1} post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
