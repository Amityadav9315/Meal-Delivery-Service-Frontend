import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddReactionIcon from '@mui/icons-material/AddReaction';
const menu=[
    {title:"Orders",icon:<ShoppingBagIcon/>},
    {title:"Favorites",icon:<FavoriteIcon/>},
    {title:"Address",icon:<AddReactionIcon/>},
    {title:"Payments",icon:<AccountBalanceWalletIcon/>},
    {title:"Notification",icon:<NotificationsActiveIcon/>},
    {title:"Events",icon:<EventIcon/>},
    {title:"Orders",icon:<LogoutIcon/>},

]
export const ProfileNavigation = ({open,handleClose}) => {

    const isSmallScreen=useMediaQuery("(max-width:1080)")
    
  return (
    <div>
        <Drawer  varient={isSmallScreen ? "temporary" : "permanent" }
        onClose={handleClose}
         open={open} 
         anchor='left'
          sx={{zIndex}}
          >
            <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col
            justify-center text-xl gap-8 pt-16'>

            </div>

        </Drawer>

    </div>
  )
}

export default ProfileNavigation