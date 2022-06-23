import { Container } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const url="https://course-api.com/react-store-products"

export default function Cont() {
    const response = fetch(url)
  const [cart,setCart] = useState({
    cart:[],
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0,
  })
  const [data,setData] = useState({
    product:[],
  })
  const setProd=()=>{
    let products=[];

  }
    return (
    <Container>

    </Container>
  )
}
