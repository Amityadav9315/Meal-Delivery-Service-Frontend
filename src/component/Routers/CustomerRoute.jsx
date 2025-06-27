import React from 'react'

const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default CustomerRoute