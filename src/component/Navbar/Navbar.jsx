import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import "./Navbar.css"
export const Navbar =() => {

    return (
        <div   className='px-5 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>

            
                <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                    <li className='logo font-semibold text-gray-300 text-2xl '>
                        Zosh food
                    </li>
                    </div>
                     
                     <div className='flex items-center space-x-2 lg:space-x-10'>

                        <div className=''>
                            <IconButton>
                                <SearchIcon sx={{fontSize:"1.5rem"}}/>
                            </IconButton>
                    
                            
                        </div>
                        <div className=''>
                            <Avatar sx={{bgcolor:"white",color:pink.A400}}>C   </Avatar>

                            
                        </div>
                        <div className=''>
                            <IconButton>
                                <Badge color="primary" badgeContent={3}>
                                <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                                </Badge>
                            </IconButton>
                    
                            
                        </div>

                     </div>
                </div> 
            
            
        
    )
}