import { Box, Container, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import Card from './Card';
import SingleProduct from './SingleProduct';


const Item = styled("div")(({ theme }) => ({
    padding: 50,
    textAlign: 'center',
    borderRadius:15,
    position:"relative",
    display:"flex",
    justifyContent:"space-between",

  }));

export default function Custom() {
  return (
   <Container>
    <Item>
    <Box sx={{textAlign:"left",width:"200px"}}>
    <Typography variant='h1' fontSize="20px" fontWeight="1000">
        Custom Furniture built for only you
    </Typography>
    </Box>
    <Box sx={{textAlign:"right",width:"500px"}}>
    <Typography variant='body'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquid tenetur porro magni blanditiis enim, totam voluptas incidunt  
    </Typography>
    </Box>
    </Item>
    <Card/>
   </Container>
  )
}
