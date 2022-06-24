import { Container, Typography } from '@mui/material'
import React from 'react'
import {useGlobal} from '../Context'

export const Cart=({cart})=> {
    const totalOrdered = cart.reduce((previous,current) => previous + current.quantity ,0);
    const itemsTotal = cart.reduce((previous, current) => previous + (current.price *current.quantity), 0);
    const tax = (itemsTotal ) * 0.15;
    const orderTotal = itemsTotal + tax;
    // const {updateBadge} =useGlobal()

  return (
   <Container sx={{color:"orange"}} >
    {/* {updateBadge(totalOrdered)} */}
    <Typography variant="h2" fontSize="30px" fontWeight="500">Order Summary</Typography>
    <Typography variant="body2">Items ordered :{totalOrdered}</Typography>
    <Typography variant="body">Items Total:{itemsTotal.toFixed(2)}</Typography>
    <Typography variant="body2">Tax: ${tax.toFixed(2)}</Typography>
    <Typography variant="h3" fontSize="20px" paddingTop="10px">Order Total: ${orderTotal.toFixed(2)}</Typography>
   </Container>
  )
}
