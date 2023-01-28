import React from 'react'
import { useSelector } from 'react-redux'

const AdminHome = () => 
{  const  username= useSelector((state:any)=> state.login.username)

  return (
    <div>AdminHome
      <h2>hi admin {username}</h2>
    </div>
  )
}

export default AdminHome