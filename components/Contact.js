import React from 'react'
import { Container, Row ,Col, FloatingLabel} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Contact = () => {
  return (
    <div id='contact'>
        <h1 className='display-5 text-center my-3'>Register your slots</h1>
        <Container>
            <Row className='justify-content-center'>
                <Col md={7}>
                <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        // className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      </InputGroup>
                </Col>
            </Row>





            <Row className='justify-content-center'>
                <Col md={7}>
                <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-person-plus-fill"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Person Name"
        // className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
      </InputGroup>
                </Col>
            </Row>

<Row className='justify-content-center'>
    <Col md={7}>
    <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
    </Col>
</Row>

{/* <Row className='justify-content-center'>
    <Col md={7}>
        <button>ok</button>
    </Col>
</Row> */}
<Row className='justify-content-center'>
    <Col md={7}>
        <p className='small text-primary my-3 text-center'>Copyright 2023-2024</p>
    </Col>
</Row>

        </Container>
    </div>
  )
}

export default Contact