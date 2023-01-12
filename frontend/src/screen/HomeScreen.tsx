import React ,{useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { hasOnlyExpressionInitializer } from 'typescript'
import { btn_value_increse } from '../redux/actions/btnAction';
import Products from './products';







const HomeScreen = () => {
  const  [value,setValue ]=useState(0);
const dispatch =useDispatch();
const btnState =useSelector((state:any )=>state.btnValue.btnValue);
   const handleChange=()=>{
    dispatch(btn_value_increse()) 

   }
  return (
    <div className='hero m-0' >
    {/* <h1> Welcome to home page! {btnState}</h1> */}
    {/* <button onClick={handleChange}> increse me</button> */}

    <div className="card bg-dark text-white border-0">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZq0LhFwG9MhgRcWxm0PaZRFdzKhuqPqXccA&usqp=CAU" className="card-img" alt="Background" height="0px" />
  <div className="card-img-overlay d-flex flex-column">
   
    <h5 className="card-title display-3">Shopping cart</h5>
    <p className="card-text"> shopping cart txt</p>

  </div>

</div>


    </div>
  )
}

export default HomeScreen

