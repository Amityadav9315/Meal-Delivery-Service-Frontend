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

              <p>Bill Details</p>

            </div>
            </section>
        </main>
    </div>
  )
}

export default Cart