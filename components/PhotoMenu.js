import React,{useState} from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Efive from "../image/efive.jpg"
import Eseven from '../image/eseven.jpg'
import Eten from '../image/eten.jpg'
import Enine from '../image/enine.jpg'
import Eeleven from '../image/eeleven.jpg'
import Last from '../image/eover.jpg'
import Modal from 'react-bootstrap/Modal';

const Menu = () => {
  const [firstCard, setfirstCard] = useState(false);
  const [secondtCard, setsecondCard] = useState(false);
  const [thirdCard, setthirddCard] = useState(false);
  const [fourthCard, setfourthCard] = useState(false);
  const [fifthCard, setfifthCard] = useState(false);
  const [sixthCard, setsixthCard] = useState(false);



  function MyfirstModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            weeeding photography
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MysecondModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Traditional weeeding photography
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MythirdModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            candid weeeding photography
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MyfourthModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            babyshower photography
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MyfifthModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            born baby photography
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function MysixthModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Pre weeeding photography
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );


    }


  return (
    <div className='bg-secondary'>
      {/* <h1 className='display-5 my-3 text-center'> Pacakages we have</h1> */}
    <Container id='package' className='bg-secondary'>
        <Row>
            <Col md={4} className="mb-3">
            <Card >
      <Card.Img variant="top" src={Enine} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => setfirstCard(true)}>Go somewhere</Button>
        <MyfirstModel
        show={firstCard}
        onHide={() => setfirstCard(false)}
      />
      </Card.Body>
    </Card>
            </Col>
           
           
           
            <Col md={4} className="mb-3">
            <Card >
      <Card.Img variant="top" src={Efive} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => setsecondCard(true)}>Go somewhere</Button>
        <MysecondModel
        show={secondtCard}
        onHide={() => setsecondCard(false)}
      />
      </Card.Body>
    </Card>
            </Col>
            
            
            
            
            <Col md={4} className="mb-3">
            <Card >
      <Card.Img variant="top" src={Last} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => setthirddCard(true)}>Go somewhere</Button>
        <MythirdModel
        show={thirdCard}
        onHide={() => setthirddCard(false)}
      />     
       </Card.Body>
    </Card>
            </Col>
        </Row>



        {/*  */}



        <Row>
            <Col md={4} className="mb-3">
            <Card >
      <Card.Img variant="top" src={Eten} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => setfourthCard(true)}>Go somewhere</Button>
        <MyfourthModel
        show={fourthCard}
        onHide={() => setfourthCard(false)}
      />   
         </Card.Body>
    </Card>
            </Col>
           
           
           
            <Col md={4} className="mb-3">
            <Card >
      <Card.Img variant="top" src={Eseven} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => setfifthCard(true)}>Go somewhere</Button>
        <MyfifthModel
        show={fifthCard}
        onHide={() => setfifthCard(false)}
      />   
      </Card.Body>
    </Card>
            </Col>
           
           
           
            <Col md={4} className="mb-3">
            <Card >
      <Card.Img variant="top" src={Eeleven} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => setsixthCard(true)}>Go somewhere</Button>
        <MysixthModel
        show={sixthCard}
        onHide={() => setsixthCard(false)}
      />  
      </Card.Body>
    </Card>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Menu
