import Grid from '@mui/material/Grid';
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import LabelIcon from '@mui/icons-material/Label';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import MenuCard from './MenuCard';


const categories=[
    "pizza",
    "biryani",
    "burger",
    "chicken",
    "rice"
];
const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegeterian only",value:"vegeterian"},
    {label:"Non-Vegeterian",value:"non_vegeterian"},
    {label:"Seasonal",value:"seasonal"}
];
const menu=[1,1,1,1,1,1]
const RestaurantDetails = () => {
    const [foodType,setFoodType]=useState("all")
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
    }
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className="px-5 lg:px-20"> Home/india/indian fast food/3</h3>
            <div>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img  className="w-full h-[65vh] object-cover" 
                    src="https://lh3.googleusercontent.com/1akc2mEb7giNcZOHWq57ZN7Q15peGKWApoiS0_MlJ-0N5P3f0qoBrPXFwusCWijp3JSTB_LsbROpl66rdV_bOvgGS_KNbGy9jsY-Rh0=w1200-rw" 
                    alt=""
                    />
                </Grid>
                <Grid item xs={12} lg={10}>
                    <img  className="w-full h-[44vh] object-cover" 
                    src="https://lh3.googleusercontent.com/1akc2mEb7giNcZOHWq57ZN7Q15peGKWApoiS0_MlJ-0N5P3f0qoBrPXFwusCWijp3JSTB_LsbROpl66rdV_bOvgGS_KNbGy9jsY-Rh0=w1200-rw" 
                    alt=""
                    />
                </Grid>
                <Grid item xs={12} lg={10}>
                    <img  className="w-full h-[44vh] object-cover" 
                    src="https://lh3.googleusercontent.com/1akc2mEb7giNcZOHWq57ZN7Q15peGKWApoiS0_MlJ-0N5P3f0qoBrPXFwusCWijp3JSTB_LsbROpl66rdV_bOvgGS_KNbGy9jsY-Rh0=w1200-rw" 
                    alt=""
                    />
                </Grid>
                </Grid>
            </div>
            <div className="pt-3 pb-5">
                <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
                <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugiat aliquid magni repellendus laudantium voluptatem, reiciendis illo? Fugit, necessitatibus voluptatem magnam distinctio veniam, qui ratione alias quas nobis adipisci totam.</p>
                
                <div className="space-y-3 mt-3">
                <p className="text-gray-500 flex items-center gap-3">
                    <LocationOnIcon/>
                    <span>
                    Sanjay Nagar, (Ghaziabad)
                     </span>
                     </p>
                     <p className="text-gray-500 flex items-center gap-3">
                    <CalendarMonthIcon/>
                    <span>
                    Mon-Sun: 9:00 AM - 9:00 PM (Today)
                     </span>
                     </p>

                </div>

               
            </div>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter'>
            <div className='box space-y-5 lg:sticky top-28 d'>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodTypes}>
                                {foodTypes.map((item)=>  (<FormControlLabel key={item} value={item.value} control={<Radio/>} label={item.label}/>))}

                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodTypes}>
                                {categories.map((item)=> ( <FormControlLabel key={item} value={item} control={<Radio/>} label={item}/>))}

                            </RadioGroup>
                        </FormControl>
                    </div>
                 </div>
            </div>
            <div className='space-y-5 lg:[80%]  lg:pl-10 w-full'>
                {menu.map((item)=><MenuCard/>)}
            </div>
        </section>
        </div>
  );
};

export default RestaurantDetails