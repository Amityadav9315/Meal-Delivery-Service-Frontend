import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const initialValues={
  fullName:"",
  email:"",
  password:"",
  role:"ROLE_CUSTOMER"
}
const RegisterForm = () => {
   const navigate=useNavigate()
  const handleSubmit=()=>{
  }
  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Login
      </Typography>
      <Formik  onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <Field
                              as={TextField}
                                name="fullName"
                                label="full name"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                              />
                              <Field
                              as={TextField}
                                name="password"
                                label="password"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                              />
                              <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' variant='contained'>Login</Button>


          </Form>

      </Formik>

      <Typography variant='body2' align='center' sx={{mt:3}}>
        If have an account already?
        <Button size='small' onClick={()=>navigate("/account/login")}>
        Login
        </Button>
      </Typography>

    </div>
  )
}

export default RegisterForm