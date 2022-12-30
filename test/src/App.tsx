import React from 'react';
import Header from './components/Header';
import Footer  from './components/Footer';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen'
function App() {
  return ( 
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
  );
}

export default App;
