import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer  from './components/Footer';
import './App.css';

import { BrowserRouter , Routes,Route } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import ProductDetails from './screen/ProductDetails';
import ProductListing from './screen/ProductListing';
import AdminHome from './screen/AdminHome';
import { store,persistore } from './redux/store';
import { Provider, useDispatch } from 'react-redux';
import Cart from './components/Cart';
import { PersistGate } from 'redux-persist/integration/react';
import { Container } from 'react-bootstrap';
import { setAuthToken } from './components/authtokens';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import { checkAuth } from './redux/actions/authAction';
import { useNavigate } from "react-router-dom";
function App() {
  const  IsLogin= useSelector((state:any)=> state.login.isLoggedIn)

 
  return ( 
    
     
    <BrowserRouter>
    <Header />
 <ToastContainer/>
    <main>
  <Container>
  
        <Routes>
          
       <Route  path="/" element={<HomeScreen/>} />
       {IsLogin&&<Route path='/adminpanel' element={<AdminHome/>}/>}
       
        {!IsLogin&&<Route path="/login" element={<LoginScreen/>} />}
        <Route path="/signup" element={<SignupScreen/>} />
        <Route path="/store" element={<ProductListing/>} />
        <Route  path="/product/:productId" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route> 404 Not Found!</Route>

      </Routes>
      </Container>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
