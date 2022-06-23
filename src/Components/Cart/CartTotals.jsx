import { Box, Typography } from '@mui/material'
import React from 'react'

export default function CartTotals({value}) {
    const {cartSubTotals,cartTax,CartTotal} = value
  return (
    <Box>
        <Typography>subTotal:${cartSubTotals}</Typography>
        <Typography>Tax:{cartTax}</Typography>
        <Typography>total:{CartTotal}</Typography>
    </Box>
  )
}
