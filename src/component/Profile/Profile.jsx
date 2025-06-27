import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'

const Profile = () => {
    const[ openSideBar,setOpenSideBar]=useState(false);
  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
           <ProfileNavigation open={openSideBar}/>


        </div>
        <div className='lg:w-[80%]'>

          <Routes>
            <Route path='/' element={<userprofile/>}
            </Route>
          </Routes>
       
             


        </div>


    </div>
  )
}

export default Profile