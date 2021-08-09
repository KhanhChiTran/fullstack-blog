import React, { useState } from "react"
import Layout from "../components/Layout"
import LogForm from "../components/Form"
import { Form, Button } from "react-bootstrap"
import firebase from "../firebase"

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
  })
  // const {username,email,password,avatar} = user
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    const registerForm = document.getElementById("form")
    const username = registerForm.elements["username"].value
    const email = registerForm.elements["email"].value
    const password = registerForm.elements["password"].value
    const confirmpassword = registerForm.elements["confirmpassword"].value
    if (password === confirmpassword) {
      fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          data: JSON.stringify({ username, email, password, confirmpassword }),
        },
      })
        .then(a => a.json())
        .then(b => console.log(b))
        .catch(err => console.log(err))
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(email, password)
      //   .then(user => console.log(user))
      //   .catch(err => console.log(err))
      // console.log(e)
    } else {
      throw Error("Confirm password is not correct")
    }
  }

  return (
    <Layout>
      <h1>Register</h1>
      <Form id="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            // value={email}

            type=""
            placeholder="Enter username"
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            // value={email}

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
            name="password"
            // value={password}
            // onChange={handleOnchange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirmpassword"
            // value={password}
            // onChange={handleOnchange}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agreed with all the conditions"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Layout>
  )
}
