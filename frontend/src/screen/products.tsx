/* eslint-disable prefer-const */
import { wait } from '@testing-library/user-event/dist/utils';
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setProduct } from '../redux/actions/productActions';


function products() {
    const [data, setData] = useState([]);
      const [filter, setfilter] = useState(data);
      const [loading, setloading] = useState(false);
      let componentMounted = true;
  

   const fetchProducts = async () => {
    setloading(true)
await axios.get("https://fakestoreapi.com/products").then((response)=>{
  if(componentMounted){
    setData(response.data)
    setfilter(response.data);
    setloading(false)
    console.log("filter",filter);
    console.log("daat",data);
  }
  return ()=>{
    componentMounted=false
  }

})
   }  
   useEffect(() => {
    fetchProducts();
  }, []);

  const Loading =()=>{
    return <>
    Loadinga......</>
  }
  const ShowProducts = ()=>{
    return <>
    <div className="buttons">
 <button className="btn btn-outline-dark">All</button>
 <button className="btn btn-outline-dark">MensClothing</button>
 <button className="btn btn-outline-dark">All</button>
 <button className="btn btn-outline-dark">All</button>
    </div>
    </>
  }
return (
    <div>
      <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5"></div>
        <h1  className='display-6 fw-bolder text-center'>Latest product</h1>
        <hr/>
      </div> 
      </div>
      <div className="row justify-content-center">
        {loading ?<Loading/>:<ShowProducts/>}
      </div>
    </div>
  )
}

export default products