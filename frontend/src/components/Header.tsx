//rafce

import { useNavigate } from "react-router-dom";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setlogout } from "../redux/actions/authAction";

const Header = () => {
  const navigate = useNavigate();
  const state = useSelector((state: any) => state.cart)
  const IsLogin = useSelector((state: any) => state.login.isLoggedIn)
  const username = useSelector((state: any) => state.login.username)
  console.log("login state", IsLogin)
  function handleClick() {
    navigate('/login')
  }



  const handlechange = () => {
    console.log("logout")
    const dispatch = useDispatch();
    dispatch(setlogout());
    handleClick();
    

  }
  return (

    <nav className="navbar navbar-inverse navbar-fixed-top  navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4" href="/">
          REDUX
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/store">
                store <span className="sr-only">(current)</span>
              </a>
            </li>

          </ul>
          <div className="buttons mx-auto">

            <ul>
              {!IsLogin && <NavLink to="/login" className="btn btn-outline-light mx-1">
                <i className="fa fa-sign-in mx-2 " aria-hidden="true"></i>Login
              </NavLink>}


              {!IsLogin && <NavLink to="/signup" className="btn btn-outline-light mx-1">
                <i className="fa fa-user-plus mx-2" aria-hidden="true"></i>{" "}
                Register{" "}
              </NavLink>}
              {IsLogin&&    <NavLink to="/cart" className="btn btn-outline-light mx-1">
                <i className="fa fa-shopping-cart mx-2" aria-hidden="true"></i> Cart
                ({state.length}){" "}
              </NavLink>}

              {IsLogin && <NavLink to="/profile" className="btn btn-outline-light mx-2">
                <i className="fa fa-user mx-2 " aria-hidden="true"></i>{username}
              </NavLink>}


            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
