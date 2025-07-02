import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Field, Formik } from 'formik'
import React from 'react'
import { Form } from 'formik'

const initialValues={
  email:"",
  password:""
}
 export const LoginForm = () => {
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
                                name="email"
                                label="email"
                                fullWidth
                                variant="outlined"
                              />
                              <Field
                              as={TextField}
                                name="password"
                                label="password"
                                fullWidth
                                variant="outlined"
                              />


          </Form>

      </Formik>

    </div>
  )
}

export default LoginForm