import React, { useMemo, useState, useCallback } from "react"
import HomeCarousel from "../components/Carousel"
import Layout from "../components/Layout"
import { Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react"
import axios from "axios"
const NewPost = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const history = useHistory()
  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/create-post", {
        data: {
          title,
          content,
          token: document.cookie,
        },
      })
      .then(res => {
        if (res.data.message === "POST SUCCESS") {
          alert("Post successfully")
          history.push("/")
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <Layout>
      <h1>THis is a new Post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title </Form.Label>
          <Form.Control
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="A post title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Content</Form.Label>
          <Form.Control
            value={content}
            onChange={e => setContent(e.target.value)}
            as="textarea"
            placeholder="Start write something"
            style={{ minHeight: "100px" }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Layout>
  )
}

export default NewPost
