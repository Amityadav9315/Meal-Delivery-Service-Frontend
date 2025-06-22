import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
const demo=[
    {
        category:"Nuts & seeds",
        ingredients:["Cashews"]
        bdghlkfdhlk
    },
    {
         category:"Protein",
         ingredients:["Protein","Bacon strips"]
    },
]
const MenuCard=()=> {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >

            <div className='lg:flex items-centre justify-between'>
                <div className='lg:flex items-center lg:gap-5' >
                    <img 
                    className='w-[7rem] h-[7rem] object-cover'
                    src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="
                     alt=""  
                     />
                     <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                        <p className='font-semibold text-xl'>Burger</p>
                        <p>₹499</p>
                        <p className='text-gray-400'>nice food</p>
                     </div>


                </div>
            </div>
          

          
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'>
                {
                    demo.map((item)=>
                        <div>
                            <p>{item.category}</p>
                    <FormGroup>
                        <FormGroup>
  {item.ingredients.map((item)=>  <FormControlLabel control={<Checkbox  />} label="Label" />)}
 
</FormGroup>
                    </FormGroup>
                    </div>
                    )
                }
            </div>
            <div className='pt-5'>
              <Button varient="contained" disabled={false} type="submit">{true?"Add to cart":"Out of stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard