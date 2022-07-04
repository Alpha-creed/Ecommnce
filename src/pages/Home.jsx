import { Container, styled,Box } from '@mui/material'
import React from 'react'
import Custom from '../Components/Home/Custom'
import Footer from '../Components/Home/Footer'
import FProduct from '../Components/Home/FProduct'
import Head from '../Components/Header'
import Intro from '../Components/Home/Intro'

const Feat = styled('div')(({ theme }) => ({
    padding:0,
    margin:0,
    [theme.breakpoints.down('md')]: {
        paddingTop:100,
    },
    [theme.breakpoints.up('md')]: {
        paddingTop:180,
  
    },
   
  }));

export default function Home() {
  return (
    <Box sx={{width:"100%"}}>
        <Intro/>
        <Feat>
        <FProduct/>
        </Feat>
        <Custom/>  
    </Box>
  )
}
