import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
   const state = useSelector((state:any)=>state.cart)
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top  navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
      <div className="container-fluid">


        <a className="navbar-brand fw-bold fs-4" href="#">REDUX</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">about <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/p">products <span className="sr-only">(current)</span></a>
            </li>

          </ul>
          <div className="buttons">

            <NavLink to="" className="btn btn-outline-light">
              <i className="fa fa-sign-in me-1 " ></i>  Login</NavLink>
            <NavLink to="" className="btn btn-outline-light">
              <i className="fa fa-user-plus ms-2" aria-hidden="true"></i>  Register  </NavLink>
            <NavLink to="/cart" className="btn btn-outline-light ms-2">
              <i className="fa fa-shopping-cart " aria-hidden="true"></i>   Cart ({state.length})  </NavLink>



          </div>
        </div>
      </div>

    </nav>
  )
}

export default NavBar
