import { Box, Button, Card, CardActions, CardMedia, Container, Link, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


  const Imgs = styled('img')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
    //   display:"none"
      width:600,
      height:200,
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
        width:300,
        height:250,
        padding: theme.spacing(1),
    },
  }));

export default function SingleProduct({name,image,price}) {
  return (
    <Box>
        <Link href="www.google.com" ><Imgs src={image} alt={name}  /></Link>
        <Stack direction="row" justifyContent="space-between"> 
            <Typography>{name}</Typography>
            <Typography>${price}</Typography>
        </Stack> 
</Box>

  )
}
