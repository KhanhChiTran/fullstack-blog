import React, { useState, useContext } from "react"
import LogForm from "../components/Form"
import Layout from "../components/Layout"
import { Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { UserContext } from "../userContext"
import { userTypes } from "../userContext/userTypes"
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const [{ userInfo, currentUser }, dispatch] = useContext(UserContext)
  const handleSubmit = e => {
    e.preventDefault()
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        email,
        password,
      },
    })
      .then(res => res.json())
      .then(user => {
        console.log(user)
        const { token, userName } = user

        document.cookie = `${user.token}`
        dispatch({
          type: userTypes.USER_SIGNIN,
          userInfo: { userName, email },
        })
        history.push("/")
      })
      .catch(err => console.log(err))
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
