import React from "react"
import { Card, Button } from "react-bootstrap"

export default function BlogCard({ Img, Title }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Img} />
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
