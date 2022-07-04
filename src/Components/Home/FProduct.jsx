import { Button, Container } from '@mui/material'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import { Stack } from '@mui/material'
import { styled } from '@mui/material'
import { Typography } from '@mui/material'
import { Divider } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { lightBlue } from '@mui/material/colors'
import { useState } from 'react'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import SingleProduct from '../SingleProduct'
import { Route, Router,Link, Routes } from 'react-router-dom'
import Product from '../../pages/Product'
import Home from '../../pages/Home'

const url="https://course-api.com/react-store-products"



const Small = styled('div')(({ theme }) => ({
  display:"flex",
  justifyContent:"center",
  [theme.breakpoints.down('md')]: {
      display:"block",
      paddingLeft:"30px"
  },
  [theme.breakpoints.up('md')]: {
      display:"flex",
     justifyContent:"space-evenly"
      // padding: theme.spacing(6),

  },
  position:"relative"
 
}));


const add = (a) => a.slice(0,3);

export default function FProduct() {
  const [hover,setHover] = useState(false);


  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  let i=0
  const [loading,setLoading] = useState(true);
    const [items,setItems] = useState([])
    const [num,setNum] =useState(0)
    const reduce = []
    const fetchItems = async() =>{
        setLoading(true)
        try{
            const response = await fetch(url)
            const stuffs=await response.json()
            setLoading(false)
            console.log(stuffs)
            setItems(add(stuffs))
            console.log(items)
        }catch(error){
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchItems()
    },[])
    if(loading){
        return(
            <Box>
                <Typography variant="body">
                    Loading...
                </Typography>
            </Box>
        )
        
    }


   
  return (
    <Box sx={{ paddingBottom:10,display:"flex",width:"100%" ,flexWrap:"wrap"}}>
      <Typography variant="h3">
          Featured Product
      </Typography>
      <Divider/>
      <Small>
      {items.map(product=>{
                        return <SingleProduct  key={product.key} product={product} />;
                            
                 })}
                 </Small>
    </Box>
  )
}
