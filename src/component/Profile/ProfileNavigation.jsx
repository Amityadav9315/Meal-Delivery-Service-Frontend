import React from 'react';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const menu = [
  { title: 'Orders', icon: <ShoppingBagIcon /> },
  { title: 'Favorites', icon: <FavoriteIcon /> },
  { title: 'Address', icon: <AddReactionIcon /> },
  { title: 'Payments', icon: <AccountBalanceWalletIcon /> },
  { title: 'Notification', icon: <NotificationsActiveIcon /> },
  { title: 'Events', icon: <EventIcon /> },
  { title: 'Logout', icon: <LogoutIcon /> }
];

const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const navigate=useNavigate(); 

  const handleNavigate=()=>{
     navigate(`/my-profile/${item.title.toLowerCase}`)

  }

  return (
    <Drawer
      variant={isSmallScreen ? 'temporary' : 'permanent'}
      onClose={handleClose}
      open={isSmallScreen ? open : true}
      anchor="left"
      sx={{
        zIndex: 1200, // lower than navbar
        '& .MuiDrawer-paper': {
          top: '64px', // adjust if navbar height is different
          height: 'calc(100% - 64px)',
          width: isSmallScreen ? '70vw' : '20vw',
        },
      }}
    >
      <div className="h-full flex flex-col justify-start text-xl gap-2 bg-black text-white">
        {menu.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="px-5 py-2 flex items-center space-x-5 cursor-pointer hover:bg-zinc-800 rounded-md transition">
              {item.icon}
              <span>{item.title}</span>
            </div>
            {idx !== menu.length - 1 && <Divider className="bg-gray-700" />}
          </React.Fragment>
        ))}
      </div>
    </Drawer>
  );
};

export default ProfileNavigation;
