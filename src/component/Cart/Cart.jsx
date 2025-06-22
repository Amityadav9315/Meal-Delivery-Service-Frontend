import Divider from '@mui/material/Divider';
import React from 'react'
import { CartItem } from './CartItem'
const items=[1,1]
const Cart = () => {
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
        </main>
    </div>
  )
}

export default Cart