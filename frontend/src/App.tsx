import React from 'react';
import Header from './components/Header';
import Footer  from './components/Footer';
import './App.css';

import { BrowserRouter , Routes,Route } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import ProductDetails from './screen/ProductDetails';
import ProductListing from './screen/ProductListing';
import { store,persistore } from './redux/store';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import { PersistGate } from 'redux-persist/integration/react';
import { Container } from 'react-bootstrap';
import { setAuthToken } from './components/authtokens';
import { ToastContainer, toast } from 'react-toastify';
function App() {

  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }
  return ( 
    <Provider store={store} >
      <PersistGate persistor={persistore}>
    <BrowserRouter>
    <Header />

 <ToastContainer/>
    <main>
  <Container>
        <Routes>
       <Route  path="/" element={<HomeScreen/>} />
       
        <Route path="/login" element={<LoginScreen/>} />
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
  </PersistGate>
  </Provider>
  );
}

export default App;
