import { Box, Button, Link, Stack, styled, Typography } from '@mui/material'
import React from 'react'

  const Imgs = styled('img')(({ theme }) => ({
    display:"flex",
    flexWrap:"wrap",
    [theme.breakpoints.down('md')]: {
    //   display:"none"
      width:600,
      height:200,
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
        width:200,
        height:150,
    },
    [theme.breakpoints.down('sm')]: {
      display:"none",
      
    },
  }));
  const ImgsConst = styled('img')(({ theme }) => ({
    paddingLeft:0 ,
    [theme.breakpoints.down('sm')]: {
      display:"block",
      width:200,
      height:200,
    },
    [theme.breakpoints.up('sm')]: {
      display:"none"
    },
  }));
  // const Full= styled('div')(({ theme }) => ({
  //   [theme.breakpoints.up('md')]: {
  //     width:200,
  //     paddingRight:20
  //   }
  // }))
export default function SingleProduct(props) {
  const {id,name,image,price,AddToCart,ClearCart} = props.product
  const Btn = styled("div")(({ theme }) => ({
    display:"flex",
    width:200,
    [theme.breakpoints.down('md')]: {
      flexDirection:"column"
    },
  }));
  return (
    <Box sx={{width:"auto"}}>
        <Link href="www.google.com" ><Imgs src={image} alt={name}  /></Link>
        <Link href="www.google.com" ><ImgsConst src={image} alt={name}  /></Link>
        <Stack direction="row" justifyContent="space-around" > 
            <Typography>{name}</Typography>
            <Typography>${price}</Typography>
        </Stack> 
        {/* <Button onClick={()=>AddToCart(props)}>Add to cart</Button>
        <Button onClick={()=>ClearCart(props)}>clear Items</Button> */}
                <Btn>
        <Button onClick={()=>props.handleAddToCart(props.product)}>add </Button>
        <Button onClick={()=>props.handleRemoveFromCart(props.product)}>remove</Button>
        </Btn>


</Box>

  )
}
