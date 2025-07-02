import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'

import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
import Cart from '../component/Cart/Cart'
import Profile from '../component/Profile/Profile'
import Home from '../component/Home/Home'
import Auth from '../component/Auth/Auth'

const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            
            <Route path="/" element={<Home/>} />
            <Route path="/my-profile/*" element={<Profile/>}/>
        {/*    <Route path="/profile" element={<Navigate to="/my-profile" replace />}/>  */}
            <Route path="/account/:register" element={<Home/>}/>
            <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>

        <Auth/>
        
    </div>
  )
}

export default CustomerRoute