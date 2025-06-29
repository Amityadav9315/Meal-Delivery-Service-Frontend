import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img
            className='h-16 w-16'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&s'
            alt=''
            />
            <div>
                <p>Pasta</p>
                <p>$299</p>
            </div>
        </div>
        <div>
            <Button  className="cursor-not-allowed">Comleted</Button>
        </div>

    </Card>
  )
}

export default OrderCard