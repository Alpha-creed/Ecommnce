import { Box, Button, Card, CardActions, CardMedia, Container, Link, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Cart from './Cart/Cart';


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
export default function SingleProduct(props,AddCart) {
  const {id,name,image,price} = props
  return (
    <Box >
        <Link href="www.google.com" ><Imgs src={image} alt={name}  /></Link>
        <Link href="www.google.com" ><ImgsConst src={image} alt={name}  /></Link>

        <Stack direction="row" justifyContent="space-between"> 
            <Typography>{name}</Typography>
            <Typography>${price}</Typography>
        </Stack> 
        <Button onClick={AddCart}>Add to cart</Button>
</Box>

  )
}
