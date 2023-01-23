import React ,{useState,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { btn_value_increse } from '../redux/actions/btnAction';




const HomeScreen = () => {

  const  [value,setValue ]=useState(0);
const dispatch =useDispatch();
const  countstaet= useSelector((state:any)=> state.btnValue.btnValue)
console.log("state",countstaet)
const handlechange=()=>{
  console.log("hey")
  dispatch(btn_value_increse())
}




useEffect(() => {
  const access = localStorage.getItem("accessToken");
  console.log("access", access)
  
  const refresh = localStorage.getItem("refreshToken");
  console.log("refresh", refresh)
}, [0])

  return (
    

<div>
  <div className='Container'>


  {countstaet}
<button onClick={handlechange}>click me </button>

  

</div>
  </div>

  )
}

export default HomeScreen

