import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia
            sx={{height:300}}
             image='https://cdn.pixabay.com/photo/2022/01/19/21/10/food-6950991_1280.jpg'/>
         
         <CardContent>
            <Typography variant='h5'>
                 Indian Fast Food
            </Typography>
             <Typography variant='body2'>
                 50% off on your first order
            </Typography>
            <div className='py-2 space-y-2'>
                <p>{"mumbai"}</p>
                <p className='text-sm text-blue-500'>February 14,2025 12:00 AM</p>
                <p className='text-sm text-red-600'>February 16,2025 12:00 AM</p>
            </div>
         </CardContent>
    {true &&    <CardActions>
            <IconButton>
           <DeleteIcon/>
            </IconButton>
         </CardActions> }
        </Card>
    </div>
  )
}

export default EventCard