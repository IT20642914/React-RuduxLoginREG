import React ,{useState,SyntheticEvent} from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { useNavigate  } from "react-router-dom";




const SignupScreen = () => {
  const navigate = useNavigate();
  const[firstname,setfirstname]=useState('');
  const[lastname,setlastname]=useState('');
  const[email,setemail]=useState('');
  const[password,setpassword]=useState(''); 
  const[Cpassword,setCpassword]=useState('');
 



  //from sumbit method
  const SumbitHadler =async(e:SyntheticEvent)=>{
    e.preventDefault();

    let data={firstname,lastname,email,password}
    // interact with backend using fetch
    // await fetch('url here',{
    //   method:'POST',
    //   headers:{'Content-Type' :' application/json '},
    //   body:JSON.stringify({
    //     firstname,lastname,email,password
    //   })

    // })
    
    navigate("/login")
    console.log("data is",data)
    console.log("Sumbitted")
    }

  return (
    <div>
      <Container className='py-3'>
        <Row className='justify-content-md-center card shadow mb-4' >
          <Col className="card-header py-3" >
            <h1 className="m-2 card-title">Sign Up</h1>
            {/* <FormContainer> */}
            <Form className="card-body" onSubmit={SumbitHadler}  >

            <Form.Group className="my-3" controlId="firstname" >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstname" placeholder="Enter your firstname"
                 value={firstname}
                 onChange={e =>setfirstname(e.target.value)} />
               
              </Form.Group>
              <Form.Group className="my-3" controlId="lastname" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastname" placeholder="Enter your lastname" 
                 value={lastname}
                 onChange={e =>setlastname(e.target.value)}/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group className="my-3" controlId="email" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email"
                 value={email}
                 onChange={e =>setemail(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="my-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                 value={password}
                 onChange={e =>setpassword(e.target.value)}/>
              </Form.Group>
              <Form.Group className="my-3" controlId="Cpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password"
                   value={Cpassword}
                   onChange={e =>setCpassword(e.target.value)}/> 
              </Form.Group>

              <Button variant="dark"className="my-3" type="submit" >
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

export default SignupScreen
