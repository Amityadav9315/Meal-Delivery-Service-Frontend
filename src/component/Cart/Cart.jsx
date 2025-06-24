import React from 'react';
import Divider from '@mui/material/Divider';
import { AddressCart } from './AddressCart';
import { CartItem } from './CartItem';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Formik, Form, Field } from 'formik';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: '',
  state: '',
  city: '',
  pincode: '',
};

const Cart = () => {
  const [open, setOpen] = React.useState(false);
  const items = [1, 1];

  const handleOpenAddressModel = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createOrderUsingSelectedAddress = (selectedAddress) => {
    console.log('Selected Address:', selectedAddress);
    alert('Order created using selected address!');
  };

  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
    alert('Address submitted!');
    handleClose();
  };

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

              {/* Add New Address Card */}
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

      {/* Modal for Address Form */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form style={{ width: '100%' }}>
              <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="streetAddress"
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="state"
                    label="State"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="city"
                    label="City"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="pincode"
                    label="Pincode"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    color="primary"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
