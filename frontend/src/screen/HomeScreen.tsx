import React ,{useState} from 'react'
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

