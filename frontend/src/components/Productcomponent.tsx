
import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Button, Container, Row, Card,Col, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Productcomponent = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    //const { id, title, price, description, image } = products[0];

    const renderList=products.map((product:any)=>{
        
      const {id,title,price,category,image} = product;


      return (  <Container className="wide" key={id} >

               <Card  className='card ' style={{ width: '18rem'}}>
                <Card.Img variant='top' src={image} alt={title} style={{ height: '20rem'}} />
                 <Card.Body  style={{ height: '14rem'}}>
                    <Card.Title className='card-title'>{title}</Card.Title>
                    <Card.Subtitle className='card-subtitle'>${price}</Card.Subtitle>
                    <Card.Text className='meta '>{category}</Card.Text>
                    <Link  to={`/Product/${id}`}> <Button>view item</Button>  </Link>
                    </Card.Body>
                   
             </Card>
           
           </Container>);
    })

    return (
        <Col  className='md-offset-2' >
        <Row xs={1} md={4} style={{height:"13rem"}} className="g-4">

    
       {renderList}
    
       </Row>  
       </Col> 
    )
}

export default Productcomponent
