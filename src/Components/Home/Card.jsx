import { Avatar, Box, CardActions, CardContent, CardHeader, CardMedia, Container, styled, Typography } from '@mui/material'
import * as React from 'react';
import { display, textAlign } from '@mui/system';
import { brown } from '@mui/material/colors';

const Icon = styled("div")(({ theme }) => ({
  justifyContent:"center",
  textAlign:"center",
  padding:10,
  display:"flex"
}));
const Item = styled("div")(({ theme }) => ({
  justifyContent:"center",
  textAlign:"center",
  padding:20,
  background:"#8d6e63",
  borderRadius:5,
  [theme.breakpoints.down('md')]: {
      width:600,
      height:200,
    },
    [theme.breakpoints.up('md')]: {
        width:300,
        height:250,

    },
    [theme.breakpoints.down('sm')]: {
      display:"none"
  
    },
}));

const ItemConst = styled('div')(({ theme }) => ({
  justifyContent:"center",
  textAlign:"center",
  padding:5,
  background:"#8d6e63",
  borderRadius:5,
  [theme.breakpoints.down('sm')]: {
    width:200,
      height:100,

  },
  [theme.breakpoints.up('sm')]: {
   display:"none", 

  },

}));


export default function Card({title,icon}) {
  return (
    <Box sx={{paddingBottom:"20px",paddingRight:"20px"}}>
        <Item>
          <Icon>
        <Avatar>
          {icon}
        </Avatar>
        </Icon>
        <Typography variant="h1" fontWeight="1500" fontSize="30px">
          {title}
        </Typography>
        <Typography variant="h6" fontSize="15px" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sapiente error qui iure, deleniti sit, itaque voluptatem assumenda officiis obcaecati consequatur in? 
        </Typography>
        </Item>
        <ItemConst>
        <Icon>
      <Avatar>
        {icon}
      </Avatar>
      </Icon>
      <Typography variant="h1" fontWeight="1500" fontSize="10px">
        {title}
      </Typography>
      <Typography variant="h6" fontSize="5px" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sapiente error qui iure, deleniti sit, itaque voluptatem assumenda officiis obcaecati consequatur in? 
        </Typography>
      </ItemConst>
      </Box>
  )
}
