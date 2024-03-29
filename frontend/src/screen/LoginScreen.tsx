import React  from 'react'
import {Form,Button,Container,Row,Col } from 'react-bootstrap';
//import { useNavigate  } from "react-router-dom";
import { useFormik } from 'formik';
import {basicLoginvalidation} from '../Schemas/index'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setAuthToken } from '../components/authtokens';

import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";
import { setlogin } from '../redux/actions/authAction';
 
const LoginScreen = () => {
  //const navigate = useNavigate()
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const {values,errors,touched,handleBlur,handleSubmit,handleChange} = useFormik({
    initialValues: {

      email: '',
      password: '',
 
    },
    validationSchema:basicLoginvalidation,
    onSubmit: values => {
      // console.log("Login details",values);

      axios.post("/login",values).then( async (response)=>{
       const status=await response.status
        if( status==200){
          const accessToken= await response.data.accessToken;
          const refeshtoken= await response.data.refreshToken;
          const message= await response.data.message;
     
          toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
          });
    
          console.log("refeshtoken",refeshtoken);
        const decoded:any = jwt_decode(accessToken);
        console.log("decode date",decoded.roles);
        const username=decoded.username;
        const roles= decoded.roles
        setAuthToken(accessToken);
        //  localStorage.setItem("accessToken",accessToken)
        //  localStorage.setItem("refreshToken",refeshtoken)
        //  localStorage.setItem('username',username)
        //  localStorage.setItem('role',roles)
         
         dispatch(setlogin({accessToken,username,roles,refeshtoken}))
         
         if(roles=='user'){
          console.log("user login");
          navigate('/')
         }
         else if(roles=='admin'){
          console.log("admin login");

          navigate('/adminpanel')
         }

        

        }


       //window.location.href = '/'
      }).catch((error) => {
        if(error.response.status === 400){
          const massege=error.response.data.error;
          console.log(error.response.data.error);
          toast.error(massege, {
            position: toast.POSITION.TOP_RIGHT  
          });
        //   Swal.fire('Any fool can use a computer')
        }
        if(error.response.status === 401){
            const massege=error.response.data.error;
          console.log(error.response.data.error);
          toast.error(massege, {
            position: toast.POSITION.TOP_RIGHT
    
        
          });
       }
       if(error.response.status === 500){
        const massege=error.response.data.error;
        console.log(error.response.data.error);
        toast.error(massege, {
          position: toast.POSITION.TOP_RIGHT
      
        });
     }
      });
    

    },
  
  });


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
