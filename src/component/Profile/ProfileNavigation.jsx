import React from 'react';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import AddReactionIcon from '@mui/icons-material/AddReaction';

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
  const isSmallScreen = useMediaQuery('(max-width:1080px)');

  return (
    <div>
      <Drawer
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        onClose={handleClose}
        open={open}
        anchor='left'
        sx={{ zIndex: 1300 }}
      >
        <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
          {menu.map((item, idx) => (
            <div key={idx} className='flex items-center gap-4 pl-6'>
              {item.icon}
              {item.title}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
