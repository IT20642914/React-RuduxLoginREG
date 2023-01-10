import React  from 'react'
import {Form,Button,Container,Row,Col } from 'react-bootstrap';
//import { useNavigate  } from "react-router-dom";
import { useFormik } from 'formik';
import {basicLoginvalidation} from '../Schemas/index'
import { useDispatch } from 'react-redux';



const LoginScreen = () => {
  //const navigate = useNavigate()
  const dispatch =useDispatch();

  const {values,errors,touched,handleBlur,handleSubmit,handleChange} = useFormik({
    initialValues: {

      email: '',
      password: '',
 
    },
    validationSchema:basicLoginvalidation,
    onSubmit: values => {
    //  alert(JSON.stringify(values, null, 2));
      console.log("Login details",values);
     // dispatch();
      // navigate("/login")
      
    },
  
  });console.log('Errors found',errors);






  return (
    <div>
      <Container className='py-3'>
      <Row  className='justify-content-md-center card shadow mb-4' >
        <Col className="card-header py-3" >
        <h1 className="m-2 card-title">Login</h1>
         {/* <FormContainer> */}
      <Form className="card-body" onSubmit={handleSubmit}  >
      
      <Form.Group className="my-3" controlId="email" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email  && touched.email ? "input-error" :""} />
      {errors.email && touched.email &&<p className='error'>{errors.email}</p> }
        
      </Form.Group>
      <Form.Group className="my-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password  ? "input-error" :""} />
     {errors.password && touched.password &&<p className='error'>{errors.password}</p> }
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
