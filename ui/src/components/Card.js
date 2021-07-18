import React from "react"
import { Card, Button } from "react-bootstrap"
import "./card.css"

export default function BlogCard({ Img, Title }) {
  return (
    <Card className="wrap-card" style={{ width: "100%" }}>
      <div className="overlay"></div>
      <Card.Img style={{ height: 250 }} variant="top" src={Img} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          deserunt omnis quaerat possimus eaque molestias dolorum voluptatem
          nam...
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  )
}
