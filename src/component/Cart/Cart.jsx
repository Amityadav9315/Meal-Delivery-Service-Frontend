import Divider from '@mui/material/Divider';
import React from 'react'
import { CartItem } from './CartItem'
const items=[1,1]
const Cart = () => {
  const createOrderUsingSelectedAddress=()=>{
    
  }
  return (
    <div>
        <main className='lg:flex justify-between'>
            <section className='lg:w-[30%] space-y-6 lg:main-h-screen pt-10'>
       {items.map((item)=> (
       <CartItem/>))}
            
            <Divider/>
            <div className='billDetails px-5 text-sm'>

              <p className='font-extralight py-5'>Bill Details</p>
              <div className='space-y-3'>
                <div className='flex justify-between text-gray-400'>
                   <p>Item Total</p>
                   <p>₹599</p>
                </div>
                <div className='flex justify-between text-gray-400'>
                   <p>Deliver Food</p>
                   <p>₹21</p>
                   </div>

                   <div className='flex justify-between text-gray-400'>
                   <p>GST and Restaurant Charges</p>
                   <p>₹33</p>
                   </div>
                   <Divider/>
                   


              </div>
              <div className='flex justify-between text-gray-400'>
               <p>Total pay</p>
                <p>₹3300</p>
             
              </div>

            </div>
            </section>
            <Divider orientation='vertical' flexItem/>
            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
             <div>
              <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
              <div className='flex gap-5 flex-wrap justify-center'>
                {[1,1,1,1,1].map((item)=><AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>)}
                 
              </div>
             </div>
            </section>
        </main>
    </div>
  )
}

export default Cart