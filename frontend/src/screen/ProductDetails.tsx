/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';


const ProductDetails = () => {
  const product = useSelector((state:any)=>state.product )
 const {title,price,category,image,description,rating} = product;

  const {productId} =useParams();
  const dispatch=useDispatch();
 console.log("prodcut",product);


  const fetchproductDetails=async (productId:any)=>{
    console.log("product id",productId)
await axios.get(`https://fakestoreapi.com/products/${productId}`).then((response)=>{
  console.log(response.data)
  dispatch(selectedProduct(response.data))
}).catch((err)=>{
  console.log(err)
})

  }
  useEffect(()=>{
    if(productId&& productId!==""){
    fetchproductDetails(productId);}
  },[productId])
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Card  className='card ' style={{ width: '50em'}}>
        <Card.Img variant='top' src={image} alt={title} style={{ width:'25rem',height: '20rem'}} />
         <Card.Body  style={{ height: '28rem',width:'30rem'}}>
            <Card.Title className='card-title'>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Subtitle className='card-subtitle'>${price}</Card.Subtitle>
            <Card.Text className='meta '>{category}</Card.Text>
            
            </Card.Body>
           
     </Card>
      )}
    </div>
  )
}

export default ProductDetails
