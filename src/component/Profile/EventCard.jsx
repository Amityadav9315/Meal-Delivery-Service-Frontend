import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react'

const EventCard = () => {
  return (
    <div>
        <Card>
            <CardMedia
            sx={{height:300}}
             image='https://cdn.pixabay.com/photo/2022/01/19/21/10/food-6950991_1280.jpg'/>
         
         <CardContent>
            <Typography variant='h5'>
                 Indian Fast Food
            </Typography>
         </CardContent>
        </Card>
    </div>
  )
}

export default EventCard