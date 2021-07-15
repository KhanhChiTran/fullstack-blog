import React from "react"
import { Carousel } from "react-bootstrap"
import Img1 from "../images/happy4.jpg"
import Img2 from "../images/happy2.jpg"
import Img3 from "../images/happy5.jpg"
export default function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Img1} alt="First slide" />
        <Carousel.Caption>
          <h3>Share your happy moment...</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>What makes you happy..</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Life is beautiful..</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
