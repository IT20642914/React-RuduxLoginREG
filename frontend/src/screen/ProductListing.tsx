import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Productcomponent from '../components/Productcomponent';
import { fetchProducts } from '../redux/actions/userAction';





const ProductListing = () => {
  const products = useSelector((state: any) => state.allProducts)
  console.log(products);

  const dispatch = useDispatch();


  // const fetchProducts = async () => {
  //   await axios.get("https://fakestoreapi.com/products").then((response) => {
  //     console.log(response.data)
  //     dispatch(setProduct(response.data));
  //     }

  //   )
  //     .catch((err) => {
  //       console.log("error", err) 
  //     })

  // }

  useEffect(() => {
    dispatch(fetchProducts())//using thunk middleware

  }, []);
  console.log("products :", products);
  return (
    <div className=' ui grid container' >

      <Productcomponent />

    </div>
  )
}

export default ProductListing
