/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useParams } from 'react-router-dom'

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AddToCart,  } from '../redux/actions/productActions';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { fetchProduct } from '../redux/actions/userAction';


const ProductDetails = () => {
  const product = useSelector((state:any)=>state.product )
 const {title,price,category,image,description,rating} = product;

  const {productId} =useParams();
  const dispatch=useDispatch();
  console.log("prodcut",product);

const addproducttocart=(product:any)=>{
  // console.log("massage from addto cart",product)
  dispatch(AddToCart(product))
}


//   const fetchproductDetails=async (productId:any)=>{
//     console.log("product id",productId)
// await axios.get(`https://fakestoreapi.com/products/${productId}`).then((response)=>{
//   console.log(response.data)
//   dispatch(selectedProduct(response.data))
// }).catch((err)=>{
//   console.log(err)
// })

//   }


  useEffect(()=>{
    if(productId&& productId!==""){

   dispatch(fetchProduct(productId)) ;}
  },[productId])
  return (
    <div style={{marginBottom:'12rem'}}>
    
    <div className='container py-5 ' >
    <div className='row border-3 py-4'>
        <div className="col-md-6 ">
        <img  src={image} alt={title} style={{ width:'400px',height: '400px'}} />
       </div>

       <div className='col-md-6'>
            <h4 className='text-uppercase text-black-50 '>{category}</h4>
            <h1 className='display-5'>{title}</h1>
             <p className="lead fw-bolder">
                 Rating {rating &&rating.rate}<i className="fa fa-star"></i>
           </p>
           <h3 className=" display-6 fw-bold my-4">${price}</h3>
           <p className="lead">{description}</p>
           <button className=' btn btn-outline-dark px-4 py-2' onClick={()=>addproducttocart(product)} >Add to cart</button>
           <NavLink className=' btn btn-dark mx-2 px-4 py-2' to={'/cart'}>Go to cart</NavLink>
        </div>
           
     </div>
     </div>
 
    
    </div>
  )
}

export default ProductDetails
