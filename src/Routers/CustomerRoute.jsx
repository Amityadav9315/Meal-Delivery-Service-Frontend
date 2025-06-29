import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
import Cart from '../component/Cart/Cart'
import Profile from '../component/Profile/Profile'
import Home from '../component/Home/Home'

const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
                     
             <Route  path='/' element={<Profile/>}/>
             <Route  path='/account/:register' element={<Home/>}/>
             <Route  path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
             <Route  path='/cart' element={<Cart/>}/>
             <Route  path='/my-profile/*' element={<Profile/>}/>
             


        </Routes>


        
        
        
    </div>
  )
}

export default CustomerRoute