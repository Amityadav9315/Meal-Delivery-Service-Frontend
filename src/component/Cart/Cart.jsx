import React from 'react';
import Divider from '@mui/material/Divider';
import { AddressCart } from './AddressCart';
import { CartItem } from './CartItem';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import StyleIcon from '@mui/icons-material/Style';
import * as Yup from "yup"
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline:"none",
  boxShadow: 24,
  p: 4,
};

const initalialValues={
  streetAddresss:"",
  state:"",
  pincode:"",
  city:""
}
const validationSchema=Yup.object.shape({
  streetAddresss:Yup.string().required("Street address is required"),
  state:Yup.string().required("State is required"),
  pincode:Yup.string().required("pincode is required"),
  city:Yup.string().required("city address is required")


})
const items = [1, 1];

const Cart = () => {
  const createOrderUsingSelectedAddress = (selectedAddress) => {
    // Replace this with actual order creation logic
    console.log('Selected Address:', selectedAddress);
    alert('Order created using selected address!');
  };
   const handleOpenAddressModel=()=> setOpen(true);
   const [open, setOpen] = React.useState(false);
 
  const handleClose = () => setOpen(false);
  const handleSubmit=()=>{

  }


  return (
    <>
      <main className='lg:flex justify-between'>
        {/* Left Section: Cart Items and Billing */}
        <section className='lg:w-[30%] space-y-6 lg:main-h-screen pt-10'>
          {items.map((item, index) => (
            <CartItem key={index} />
          ))}

          <Divider />

          <div className='billDetails px-5 text-sm'>
            <p className='font-extralight py-5'>Bill Details</p>
            <div className='space-y-3'>
              <div className='flex justify-between text-gray-400'>
                <p>Item Total</p>
                <p>₹599</p>
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>Delivery Fee</p>
                <p>₹21</p>
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>GST and Restaurant Charges</p>
                <p>₹33</p>
              </div>
              <Divider />
            </div>
            <div className='flex justify-between text-gray-400'>
              <p>Total Pay</p>
              <p>₹3300</p>
            </div>
          </div>
        </section>

        {/* Divider Between Sections */}
        <Divider orientation='vertical' flexItem />

        {/* Right Section: Address Selection */}
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
          <div>
            <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
            <div className='flex gap-5 flex-wrap justify-center'>
              {[1, 1, 1, 1, 1].map((item, index) => (
                <AddressCart
                  key={index}
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              <Card className='flex gap-5 w-64 p-5'>
      <AddLocationIcon />
      <div className='space-y-3 text-gray-500'>
        <h1 className='font-semibold text-lg text-white'>Add new Address</h1>
      
          <Button
            variant='outlined'
            fullWidth
            onClick={handleOpenAddressModel}
          >
            Add
          </Button>
        
      </div>
    </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Formik initalValues={initalialValues}
    validationSchema={validationSchema} 
    onSubmit={handleSubmit}>
      <Grid  container spacing={2} >

        <Grid  item xs={12}>

          <Field
          as={TextField}
          name="streetAddress"
          label="Street Address"
          fullWidth
          variant="outlined"
          error={!ErrorMessage("streetAddress")}
          helperText={
            <ErrorMessage>
              {(msg)=> <span className='text-red-600'>{msg}</span>}
              
            </ErrorMessage>
          }

          />

        </Grid>
        
        
      

      </Grid>


    </Formik>
   
  </Box>
</Modal>
    </>
  );
};

export default Cart;
