import React, { useState } from "react"
import LogForm from "../components/Form"
import Layout from "../components/Layout"
import { Form, Button } from "react-bootstrap"
import firebase from "../firebase"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    // e.preventDefault()
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(user => console.log(user))
    //   .catch(err => console.log(err))
    // console.log(e)
  }
  // const handleOnchange = e => {}
  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Layout>
  )
}

export default Login
