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
import Divider from '@mui/material/Divider';

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

  return (
    <div>
      <Drawer
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        onClose={handleClose}
        open={isSmallScreen ? open :true}
        anchor='left'
        sx={{ zIndex: -1 }}
      >
        <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-start text-xl gap-2 '>
          {menu.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className='px-5 py-2 flex items-center space-x-5 cursor-pointer hover:bg-zinc-800 rounded-md transition'>
                {item.icon}
                <span>{item.title}</span>
              </div>
              {idx !== menu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
