import React ,{Children} from 'react'
import { Container,Row,Col } from 'react-bootstrap'

interface Props{
    Children:React.ReactNode
}

const FormContainer  = ({Children} :Props ) => {
    
  return (
  <Container className='py-3'>
    <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
        {Children}
        </Col>
    </Row>
  </Container>
  )
}

export default FormContainer
