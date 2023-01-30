import React ,{useState,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { toast } from 'react-toastify';
import { setlogout } from '../redux/actions/authAction';
import { btn_value_increse } from '../redux/actions/btnAction';




const HomeScreen = () => {
  const  IsLogin= useSelector((state:any)=> state.login.isLoggedIn)
const  [value,setValue ]=useState(0);
const dispatch =useDispatch();
const  countstaet= useSelector((state:any)=> state.btnValue.btnValue)
console.log("state",countstaet)



const handlechange=()=>{
  console.log("hey")
  toast.error("hey", {
    position: toast.POSITION.TOP_RIGHT
  });
  dispatch(btn_value_increse())


 
}


const username= localStorage.getItem("username")
console.log("username",username)


  return (
    

<div>
  <div className='Container'>
<div> hi {username}</div>

  {countstaet}
<button onClick={handlechange}>click me </button>

  

</div>
  </div>

  )
}

export default HomeScreen

