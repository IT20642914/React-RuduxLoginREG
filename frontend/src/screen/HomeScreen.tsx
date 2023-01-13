import React ,{useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import ProductListing from './ProductListing';






const HomeScreen = () => {
  const  [value,setValue ]=useState(0);
const dispatch =useDispatch();

  return (
    <div className='hero ' >

      
    <h1 className="card-title display-3 ">Shopping home</h1>


    <ProductListing/>
  </div>

  )
}

export default HomeScreen

