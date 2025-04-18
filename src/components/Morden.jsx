import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
function Morden() {
  return (
    <div>

<Container fluid>
         <Row className='bg-success text-white p-5 text-start'>
        <Col className='px-5 pe-5' >
            <h1 mt-5>Modern Interior Design Studio </h1>
            <p className='fs-6 mt-5 mb-5'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <Button variant="warning rounded-pill fw-bold p-3  w-25 mb-4" >Shop Now</Button>
            <Button variant="light rounded-pill fw-bold p-3 ms-4  w-25 mb-4">Explore</Button>

        </Col>
        <Col>
        <img src="../images/couch.png" alt="" srcset="" className='img-fluid w-75 mx-auto d-block'/>
        </Col>
      </Row>
      </Container>       
    </div>
   
  )
}

export default Morden