import React from "react"
import { Card, Button } from "react-bootstrap"

export default function BlogCard({ Img, Title }) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img style={{ height: 250 }} variant="top" src={Img} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          deserunt omnis quaerat possimus eaque molestias dolorum voluptatem
          nam...
        </Card.Text>
        <Button style={{ width: "100%" }} variant="primary">
          Read more
        </Button>
      </Card.Body>
    </Card>
  )
}
