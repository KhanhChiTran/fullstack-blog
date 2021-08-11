import React from "react"
import { Card, Button } from "react-bootstrap"
import "./card.css"
import moment from "moment"
import { useHistory } from "react-router-dom"
const slug = str =>
  str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")

export default function BlogCard({ Img, post }) {
  const { title, content, author, createdAt } = post
  const history = useHistory()
  console.log(post)
  return (
    <Card className="wrap-card" style={{ width: "100%" }}>
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
        <Button
          variant="primary"
          onClick={() => {
            history.push({
              pathname: `/blog/${slug(title)}`,
              state: { ...post, Img },
            })
          }}
        >
          Read more
        </Button>
      </Card.Body>
    </Card>
  )
}
