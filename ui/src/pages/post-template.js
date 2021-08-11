import React from "react"
import { Card, Button } from "react-bootstrap"
// import "./card.css"
import moment from "moment"
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Layout from "../components/Layout"

export default function BlogCard(props) {
  const history = useHistory()
  const location = useLocation()
  const { title, content, author, createdAt, Img } = location.state
  console.log(location)
  return (
    <Layout>
      <Card className="wrap-card" style={{ width: "100%", maxWidth: "600px" }}>
        <div className="overlay"></div>
        <Card.Img
          // style={{ height: 250 }}
          variant="top"
          src={Img}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Title className="card-author">
            {" "}
            {author} , {moment(createdAt).format("ddd DD MMM")}
          </Card.Title>

          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  )
}
