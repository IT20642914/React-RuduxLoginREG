import React ,{useState,SyntheticEvent} from 'react'
import {Form,Button,Container,Row,Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useNavigate  } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate()
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');

  const SumbitHadler =(e:SyntheticEvent)=>{
  e.preventDefault();
  let data={email,password}
 // interact with backend using fetch
    //  fetch('https://dummyjson.com/auth/login',{
    //   method:'POST',
    //   headers:{'Content-Type' :' application/json '},
    //   credentials:'include',
    //   body:JSON.stringify({
    //     username: email,
    //     password: password,
        
    //   })

    // })
    console.log("login data",data);
     navigate("/");
  }
  return (
    <div>
      <Container className='py-3'>
      <Row  className='justify-content-md-center card shadow mb-4' >
        <Col className="card-header py-3" >
        <h1 className="m-2 card-title">Login</h1>
         {/* <FormContainer> */}
      <Form className="card-body" onSubmit={SumbitHadler}  >
      
      <Form.Group className="my-3" controlId="email" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" 
        value={email}
        onChange={e =>setemail(e.target.value)}/>
        
      </Form.Group>
      We'll never share your email with anyone else.
      <Form.Group className="my-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password}
        onChange={e =>setpassword(e.target.value)}/>
      </Form.Group>
     
      <Button variant="dark" type="submit" >
        Submit
      </Button>
    </Form>
    {/* </FormContainer> */}
    </Col>
    </Row>
    </Container>
    </div>
  
  )
}

export default LoginScreen
