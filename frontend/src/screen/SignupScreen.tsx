import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
//import {useNavigate } from "react-router-dom";
import {basicValidation} from '../Schemas/index'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const onSubmit= async (values: any,action: any) =>{

  console.log('sumbited data is',values)
  console.log('sumbited action is',action)
 

}


const SignupScreen = () => {
  const navigate = useNavigate();

  const {values,errors,touched,isSubmitting,handleBlur,handleSubmit,handleChange} = useFormik({
    initialValues: {
      username:'',
      firstname  :'',
      lastname: '',
      email: '',
      password: '',
      Cpassword: '',
      phoneNumber:'',

    },
    validationSchema:basicValidation,
    onSubmit:values =>{
      axios.post("/register",values).then((response)=>{
        // console.log("respose",response.data)

    console.log("resopnse data",response.data);
        if(response.status === 200){
          const massege=response.data ;
          console.log(response.data );
          toast.success(massege, {
            position: toast.POSITION.TOP_RIGHT  
          });
          navigate("/login")
        }

      }).catch((error)=>{
        
        console.log(error.response.data );

        if(error.response.status === 401){
          const massege=error.response.data ;
          console.log(error.response.data );
          toast.error(massege, {
            position: toast.POSITION.TOP_RIGHT  
          });
        //   Swal.fire('Any fool can use a computer')
       }
        
      })

    },
    
    
 



  });



  return (
    <div>


      <div className='container  py-0'style={{height:'auto', marginBottom:'13rem'}}>
        <div className='row justify-content-md-center  card shadow mb-4'  >
          <Col className="card-header py-3" >
            <h1 className="m-2 card-title">Sign Up</h1>
            {/* <FormContainer> */}
            <Form className="card-body" onSubmit={handleSubmit}  >

              <Form.Group className="my-3" controlId="firstname" >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstname" placeholder="Enter your firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  className={errors.firstname && touched.firstname  ? "input-error" :""} />
                  {errors.firstname && touched.firstname &&<p className='error'>{errors.firstname}</p> }


              </Form.Group>
              <Form.Group className="my-3" controlId="lastname" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastname" placeholder="Enter your lastname"
                  value={values.lastname}
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  className={errors.lastname && touched.lastname  ? "input-error" :""}/>
                 {errors.lastname && touched.lastname &&<p className='error'>{errors.lastname}</p> }
               
              </Form.Group>

              <Form.Group className="my-3" controlId="username" >
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  className={errors.lastname && touched.username  ? "input-error" :""}/>
                 {errors.username && touched.username &&<p className='error'>{errors.username}</p> }
               
              </Form.Group>

              <Form.Group className="my-3" controlId="phoneNumber">
                <Form.Label> Phone Number</Form.Label>
                <Form.Control type="phoneNumber" placeholder="Enter Your Phone Number"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.phoneNumber && touched.phoneNumber  ? "input-error" :""} />
           {errors.phoneNumber && touched.phoneNumber &&<p className='error'>{errors.phoneNumber}</p> }
              </Form.Group>


              <Form.Group className="my-3" controlId="email" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email  ? "input-error" :""} />
               {errors.email && touched.email &&<p className='error'>{errors.email}</p> }
              
              </Form.Group>

              <Form.Group className="my-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                  value={values.password}
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  className={errors.password  && touched.password ? "input-error" :""}/>
                {errors.password && touched.password &&<p className='error'>{errors.password}</p> }
              </Form.Group>
              <Form.Group className="my-3" controlId="Cpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password"
                  value={values.Cpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.Cpassword && touched.Cpassword  ? "input-error" :""} />
           {errors.Cpassword && touched.Cpassword &&<p className='error'>{errors.Cpassword}</p> }
              </Form.Group>

       {isSubmitting}
              <Button variant="dark"  className="my-3" type="submit" >
                Submit
              </Button>
            </Form>
            {/* </FormContainer> */}
          </Col>
        </div>
      </div>

    </div>
  )
}

export default SignupScreen
function async(response: any) {
  throw new Error('Function not implemented.');
}

