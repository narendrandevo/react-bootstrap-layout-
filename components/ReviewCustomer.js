import React from 'react'
import   { Container }    from 'react-bootstrap'
import { Col, Image, Row } from 'react-bootstrap'
import Brideg from '../image/bride6.jpg'

const ReviewCustomer = () => {
  return (
    <div className='bg-light'>
      <h1 className='text-center my-3 display-5 '>Our Customer</h1>
      <Container id='review'>
<Row className='align-items-center'>
  <Col md={7} className='text-center my-3'>
  <img src={Brideg} className='rounded'></img>
  </Col>
  <Col md={5} className='ok'>
    <h2 className='h1'>Priya M</h2>
  <p className='text-muted lead my-3'>Had a great experience with Naren photography. Last year my sister got married,we arranged Naren phototgraphy for her weeding .We booked for weeding and recepition with affordable price.And the team member are very active and friendly charaters.Their work and output is excellent.Our family had full satisfied.Very neat customer handling.I will suggest you guys for Naren photography for worthy work.Thank You Team</p>
  </Col>
</Row>
      </Container>
    </div>
  )
}

export default ReviewCustomer