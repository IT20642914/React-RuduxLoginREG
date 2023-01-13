
import React from 'react'
import { useSelector } from 'react-redux'
import {  Button, Container, Row, Card, CardGroup, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Productcomponent = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    //const { id, title, price, description, image } = products[0];

    const renderList=products.map((product:any)=>{
        
      const {id,title,price,category,image} = product;


      return (  <Container className="col-md-3 mb-4 " key={id} >
        
               <Card  className='card h-100 text-center p-4' >
                <Card.Img variant='top' src={image} alt={title} style={{height:'250px'}} />
                 <Card.Body  >
                    <Card.Title className='card-title'>{title.substring(0,11)} ...</Card.Title>
                    <Card.Subtitle className='card-subtitle'>${price}</Card.Subtitle>
                    <Card.Text className='lead fw-bold'>{category}</Card.Text>
                    </Card.Body>
                   <Link to={`/Product/${id}`}> <Button className=' btn btn-outline-info bg-dark '>Buy Now</Button>  </Link>
             </Card>
           </Container>);
          




    })

    return (
     
        <Row xs={1} mx={4} style={{marginBottom:'13rem'}}  className="g-4">
       <CardGroup>
    
       {renderList}
    
    
       </CardGroup>
    
       </Row>  
      
    )
}

export default Productcomponent
