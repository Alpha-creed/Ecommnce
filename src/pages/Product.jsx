import { Box } from '@mui/material'
import React from 'react'
import End from '../Components/End'
import Head from '../Components/Header'
import ProdDisplay from '../Components/Product/ProdDisplay'

export default function Product() {
  return (
    <Box sx={{padding:"0",margin:"0"}}>
      <ProdDisplay/>
    </Box>
  )
}
