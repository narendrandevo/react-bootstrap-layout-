import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import {Row,Col} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import One from '../image/one1.jpg'
import Two from '../image/two1.jpg'
import Three from '../image/three1.jpg'
const Banner = () => {
  return (
    <div className='bg-light'>

   
    <Container fluid id='home'>
        <Row className='justify-content-center align-items-center'>
            <Col lg={10}>
            <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Three}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Racing Event</h3>
          <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Two}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Traveling Photography</h3>
          <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={One}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Model Shoot</h3>
          <p className='d-none d-sm-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
        <div className='text-center my-5'>
            <h1 className='mt-3 display-5 text-primary'>Capture the Memories in all Occusion</h1>
            <p className='lead text-muted text-primary'>This play an important role in everyone's life , they connect us to our past,  peoples, feelings, and stories. They can help us to know who we are.</p>
        </div>
    </Container>
    </div>
  )
}

export default Banner