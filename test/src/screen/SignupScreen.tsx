import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
//import {useNavigate } from "react-router-dom";
import {basicValidation} from '../Schemas/index'

//import { navigate } from '@reach/router';


const onSubmit= async (values: any,action: any) =>{

  console.log('sumbited data is',values)
  console.log('sumbited action is',action)
  // await new Promise((resolve)=> setTimeout(resolve,1000));
  // action.resetForm();


}


const SignupScreen = () => {
 // const navigate = useNavigate();

  const {values,errors,touched,isSubmitting,handleBlur,handleSubmit,handleChange} = useFormik({
    initialValues: {
     firstname  :'',
      lastname: '',
      email: '',
      password: '',
      Cpassword: '',
      phonenumber:'',

    },
    validationSchema:basicValidation,
    onSubmit,
   
   
  });
  console.log('Errors found',errors);


  return (
    <div>


      <Container className='py-3'>
        <Row className='justify-content-md-center card shadow mb-4' >
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
              <Form.Group className="my-3" controlId="phonenumber">
                <Form.Label> Phone Number</Form.Label>
                <Form.Control type="phonenumber" placeholder="Enter Your Phone Number"
                  value={values.phonenumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.phonenumber && touched.phonenumber  ? "input-error" :""} />
           {errors.phonenumber && touched.phonenumber &&<p className='error'>{errors.phonenumber}</p> }
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


              <Button variant="dark" disabled={isSubmitting} className="my-3" type="submit" >
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
