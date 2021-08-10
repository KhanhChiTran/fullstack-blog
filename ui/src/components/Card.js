import React from "react"
import { Card, Button } from "react-bootstrap"
import "./card.css"

export default function BlogCard({ Img, title, content }) {
  return (
    <Card className="wrap-card" style={{ width: "100%" }}>
      <div className="overlay"></div>
      <Card.Img style={{ height: 250 }} variant="top" src={Img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  )
}
