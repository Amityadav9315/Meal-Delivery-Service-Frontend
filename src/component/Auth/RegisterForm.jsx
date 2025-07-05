import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
const initialValues={
  fullName:"",
  email:"",
  password:"",
  role:"ROLE_CUSTOMER"
  
}
const RegisterForm = () => {
   const navigate=useNavigate()
    const dispatch=useDispatch()
    
  const handleSubmit=(values)=>{
    console.log("form values",values)
    dispatch(registerUser({userData:values,navigate}))
  };
  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Register
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
                                name="email"
                                label="email"
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
                                type="password"
                              />
                    
  <Field
  fullWidth
   margin="normal"
  as={Select}
    labelId="demo-simple-select-label"
    id="role-simple-select"
    name="Role"
    
  
    // onChange={handleChange}
  >
    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
    <MenuItem value={"ROLE_RESTAURANT-OWNER"}>Restaurant Owner</MenuItem>
  </Field>

                              <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' variant='contained'>Register</Button>


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