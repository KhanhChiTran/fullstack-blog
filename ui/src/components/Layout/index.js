import React from "react"
import { Container } from "react-bootstrap"

import Header from "../Header"
import Footer from "../Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <Container fluid className="layout">
      <Header />
      <Container className="layout-header"></Container>
      <Container className="layout-main">{children}</Container>
      <Container className="layout-footer">
        <Footer />
      </Container>
    </Container>
  )
}

export default Layout
