import { Box, Container, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import Card from './Card';
import SingleProduct from '../SingleProduct';
import ExploreIcon from '@mui/icons-material/Explore';
import ConstructionIcon from '@mui/icons-material/Construction';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { brown } from '@mui/material/colors';

const Item = styled("div")(({ theme }) => ({
  display:"flex",
  justifyContent:"space-around",
    [theme.breakpoints.down('md')]: {
     padding:20,
     flexDirection:"column"
    },
    [theme.breakpoints.up('md')]: {
     flexDirection:"row",
      padding: 30,
    },
  }));

  const Sgl = styled("div")(({theme})=>({
    textAlign:"left",
    width:"200px",
    ...theme.typography.h1,
    fontSize:"20px" ,
    fontWeight:"1000",
    [theme.breakpoints.down('md')]: {
      paddingBottom:20
     },
  }))
  const SglText = styled("div")(({theme})=>({
    ...theme.typography.body1,
    textAlign:"right",
    width:"500px",
    [theme.breakpoints.down('sm')]: {
      paddingBottom:10,
      width:200
     },
    [theme.breakpoints.down('md')]: {
      paddingBottom:20
     },
    //  [theme.breakpoints.down('sm')]: {
    //   display:"none"
    //  },
  }))
  const OvCard = styled("div")(({theme})=>({
    display:"flex",
    justifyContent:"space-evenly",
    [theme.breakpoints.down('md')]: {
      // paddingBottom:10,
      width:"300px", 
      flexDirection:"column"

     },
  }))
  const OvBox = styled("div")(({theme})=>({
    display:"flex",  
    flexDirection:"column",
    position:"relative",
    justifyContent:"center",
    [theme.breakpoints.down('sm')]: {
      // paddingBottom:10,
      // width:200
     },
     [theme.breakpoints.down('md')]: {
      // paddingBottom:10,
      paddingLeft:20,
      width:"300px", 

     },
  }))
export default function Custom() {
  return (
   <OvBox>
    <Item>
    <Sgl>
        Custom Furniture built for only you
    </Sgl>
    <SglText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquid tenetur porro magni blanditiis enim, totam voluptas incidunt  
    </SglText>
    </Item>
    <Item>
      <OvCard>
    <Card title={"Mission"} icon={<ExploreIcon/>}/> 
 
    <Card title={"Vision"} icon={<ConstructionIcon/>}/>

    <Card title={"History"} icon={<HistoryEduIcon/>}/>
    </OvCard>
    </Item>
    </OvBox>
  )
}
