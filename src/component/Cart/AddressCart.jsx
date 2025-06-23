import React from 'react'
import Card from './Card'
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
export const AddressCart = () => {
  return (
    <Card className='flex gap-5 w-64 p-5'>
        <HomeIcon/>
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-white'>Home</h1>

            <p>
                Ghazibad SanajayNagar Sectoe 23 Uttar Pradesh

            </p>
            {showButton &&(
                <Button variant='contained' onClick={() => handleSelectAddress()}>Select</Button>
            )}

        </div>

    </Card>
  )
}
