import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { modalStyle } from '../Cart/Cart';

const Auth = () => {
    const location=useLocation();
    const navigate=useNavigate();
  return (
    <>
    <Modal open={
      location.pathname==="/account/register"
      || location.pathname==="/account/login"
    }
    >
      <Box sx={modalStyle}>
        hello

      </Box>


    </Modal>


    </>
  )
}

export default Auth