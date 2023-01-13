import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AddToCart, CartValueDescres, CartVluerIncrese, DeleteFromCart } from '../redux/actions/productActions'

const Cart = () => {
    const product = useSelector((state:any)=>state.cart )
    //const {title,price,category,image,description,rating} = product;

   const dispatch=useDispatch()
   const cart = useSelector((state) => state.cart)
   const getTotal = () => {
     let totalQuantity = 0
     let totalPrice = 0
     cart.forEach(item => {
       totalQuantity += item.quantity
       totalPrice += item.price * item.quantity
     })
     return {totalPrice, totalQuantity}
   }
    const cartList= product.map((product:any)=>{
    const {id,title,price,category,image} = product;

    return (
    <div className='container py-5 'style={{paddingBottom:'12rem'}} key={id}>
         <div className='row border-3 py-4'></div>
     <div className='row'>
     <div className="col-md-4">
        <img src={product.image} alt={product.title}  height={"200px"} width={"180px"} />
     </div>
    <div className="col-md-4">
        <h3>{product.price}</h3>
        <p className="lead fw-bold">
            {product.quantity} X ${product.price}=${product.quantity*product.price}
        </p>
      
        <button className="btn btn-outline-dark me-4" onClick={() => dispatch(DeleteFromCart(product))}>
            <i className="fa fa-minus"></i>
        </button>
        <button className="btn btn-outline-dark me-4" onClick={() => dispatch(AddToCart(product))}>
            <i className="fa fa-plus"></i>
        </button>

        
    </div>
    
     </div>
     
     </div>
      
      )

    })

console.log("from cart",product)


    return (
    <div className='card m-4 bg-light  ' style={{paddingBottom:'25rem'}}>     
    
        {cartList}
        <h1 className="center">
            Total Price = ({getTotal().totalQuantity} items) 
             : <strong>${getTotal().totalPrice}</strong>
    </h1>  
    </div>
  )
}

export default Cart
