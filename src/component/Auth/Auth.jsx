import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { modalStyle } from '../Cart/Cart';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Auth = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const handleOnClose=()=>{
      navigate("/")
    }
  return (
    <>
    <Modal onClose={handleOnClose} open={
      location.pathname==="/account/register"
      || location.pathname==="/account/login"
    }
    >
      <Box sx={modalStyle}>
        {location.pathname==="/account/register"?<RegisterForm/>:<LoginForm/>}

      </Box>


    </Modal>


    </>
  )
}

export default Auth