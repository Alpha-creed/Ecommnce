import { Box, Container, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import Card from './Card';
import SingleProduct from './SingleProduct';
import ExploreIcon from '@mui/icons-material/Explore';
import ConstructionIcon from '@mui/icons-material/Construction';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { brown } from '@mui/material/colors';

const Item = styled("div")(({ theme }) => ({
  backgroundColor:"#d7ccc8",
    [theme.breakpoints.down('md')]: {
     padding:20
    },
    [theme.breakpoints.up('md')]: {
      display:"flex",
      justifyContent:"space-around",
      padding: 30,
    },
  }));

  const Sgl = styled("div")(({theme})=>({
    [theme.breakpoints.down('md')]: {
      padding:20
     },
  }))

export default function Custom() {
  return (
   <Box>
    <Item>
    <Box sx={{textAlign:"left",width:"200px"}}>
    <Sgl>
    <Typography variant='h1' fontSize="20px" fontWeight="1000">
        Custom Furniture built for only you
    </Typography>
    </Sgl>
    </Box>
    <Box sx={{textAlign:"right",width:"500px"}}>
    <Sgl>
    <Typography variant='body'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquid tenetur porro magni blanditiis enim, totam voluptas incidunt  
    </Typography>
    </Sgl>
    </Box>
    </Item>
    <Item>
    <Sgl>
    <Card title={"Mission"} icon={<ExploreIcon/>}/> 
    </Sgl>
    <Sgl>
    <Card title={"Vision"} icon={<ConstructionIcon/>}/>
    </Sgl>
    <Sgl>
    <Card title={"History"} icon={<HistoryEduIcon/>}/>
    </Sgl>
    </Item>
   </Box>
  )
}
