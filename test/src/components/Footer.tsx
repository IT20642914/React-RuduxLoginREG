import React from 'react'
import {Container,Row,Col } from  'react-bootstrap'
const Footer = () => {
  return (
    <footer className="card text-white bg-dark">

      <Container  >
        <Row >
            <Col className='text-center py-3'> Copyright Avishka&copy; </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
