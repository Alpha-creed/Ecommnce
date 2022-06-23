import { Container, Typography } from '@mui/material'
import React from 'react'

export const Cart=({cart})=> {
    const totalOrdered = cart.reduce((previous,current) => previous + current.quantity ,0);
    const itemsTotal = cart.reduce((previous, current) => previous + (current.price *current.quantity), 0);
    const shipping = cart.reduce((previous,current) => previous+current.shipping, 0);
    const tax = (itemsTotal + shipping) * 0.15;
    const orderTotal = itemsTotal + shipping+tax;

  return (
   <Container>
    <Typography variant="h2">Order Summary</Typography>
    <Typography variant="h3">Items ordered :{totalOrdered}</Typography>
    <Typography variant="body">Items Total:{itemsTotal.toFixed(2)}</Typography>
    <Typography variant="body">shipping: {shipping.toFixed(2)}</Typography>
    <Typography variant="body">Tax: ${tax.toFixed(2)}</Typography>
    <Typography variant="h3">Order Total: ${orderTotal.toFixed(2)}</Typography>
   </Container>
  )
}
