import React from "react"
import Layout from "../components/Layout"
import { Container, Figure, Row, Col, Button, Card } from "react-bootstrap"
import Flower2 from "../images/flower2.jpg"
import Happy7 from "../images/happy7.jpg"
const About = () => {
  return (
    <Layout>
      <Container>
        <Figure>
          <Row>
            <Col lg={true}>
              {" "}
              <Figure.Image alt="171x180" src={Flower2} />
            </Col>
            <Col lg={true}>
              <Figure.Caption variant="light">
                <h3>
                  “Emotions are contagious, and you can impact the emotions of
                  others by sharing how you feel...{" "}
                </h3>
                <h3>There’s no right way to write about your emotions</h3>
                <h3>
                  Thinking about what you’re feeling and why you’re feeling it..
                  Just find a quiet place and do it for 15 minutes, three or
                  four times a week.
                </h3>
                <h3>Sharing your emotions always lead to the best outcomes”</h3>
              </Figure.Caption>
              <Button variant="primary" size="lg">
                <a href="/login"> Write your thoughts now</a>
              </Button>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              {" "}
              <Figure.Image
                // width={171}
                // height={180}
                alt="171x180"
                src={Flower1}
              />
            </Col>
            <Col>
              <Figure.Caption>
                <h3>There’s no right way to write about your emotions...</h3>
              </Figure.Caption>
            </Col>
          </Row> */}
        </Figure>
        {/* <Card className="bg-dark text-white text-left ">
          <Card.Img src={Flower1} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>
              {" "}
              <h3>
                “Emotions are contagious, and you can impact the emotions of
                others by sharing how you feel...{" "}
              </h3>
              <h3>There’s no right way to write about your emotions,</h3>
            </Card.Title>
            <Card.Body>
              <Card.Text>
                <h3>
                  Thinking about what you’re feeling and why you’re feeling it..
                  Just find a quiet place and do it for 15 minutes, three or
                  four times a week.”
                </h3>
              </Card.Text>
              <Card.Text>
                {" "}
                <Button variant="primary" size="lg">
                  Write your thoughts now
                </Button>
              </Card.Text>
            </Card.Body>
          </Card.ImgOverlay>
        </Card> */}
      </Container>
    </Layout>
  )
}

export default About
