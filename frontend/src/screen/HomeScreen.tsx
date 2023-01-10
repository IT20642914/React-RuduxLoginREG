import React ,{useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { hasOnlyExpressionInitializer } from 'typescript'
import { btn_value_increse } from '../redux/actions/btnAction';







const HomeScreen = () => {
  const  [value,setValue ]=useState(0);
const dispatch =useDispatch();
const btnState =useSelector((state:any )=>state.btnValue.btnValue);
   const handleChange=()=>{
    dispatch(btn_value_increse()) 

   }
  return (
    <div>
    <h1> Welcome to home page! {btnState}</h1>

    <button onClick={handleChange}> increse me</button>
    </div>
  )
}

export default HomeScreen

