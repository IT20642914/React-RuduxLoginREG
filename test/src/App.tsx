import React from 'react';
import Header from './components/Header';
import Footer  from './components/Footer';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen'
import { store } from './redux/store';
import { Provider } from 'react-redux/es/exports';

function App() {
  return ( 
    <Provider store={store} >
    <BrowserRouter>
    <Header />
    <main>
      <Container>
        <Routes>
        <Route  path="/" element={<HomeScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/signup" element={<SignupScreen/>} />
      </Routes>
      </Container>
    </main>
    <Footer />
  </BrowserRouter>
  </Provider>
  );
}

export default App;
