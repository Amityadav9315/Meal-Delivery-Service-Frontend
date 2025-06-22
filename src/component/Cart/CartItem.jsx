import React from 'react'
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export const CartItem = () => {
  return (
    <div className='px-5'>
        <div className='lg:flex items-center lg:space-x-5'>
            <div>
                <img 
                className="w-[5rem] h-[5rem] object-cover"
                src="https://www.shutterstock.com/image-photo/traditional-chicken-biryani-served-brass-600nw-2622739739.jpg"
                  alt=''
                  />
                </div>
                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p>biryani</p>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                            <IconButton>
                            <RemoveCircleOutlineIcon/>
                            </IconButton>
                            </div>
                        </div>
        
                        
                        
                    </div>

                </div>

        </div>

    </div>
  )
}
