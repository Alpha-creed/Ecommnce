import { Container, styled } from '@mui/material'
import React from 'react'
import Custom from '../Components/Home/Custom'
import Footer from '../Components/Home/Footer'
import FProduct from '../Components/Home/FProduct'
import Head from '../Components/Header'
import Intro from '../Components/Home/Intro'

const Feat = styled('div')(({ theme }) => ({
    
    [theme.breakpoints.down('md')]: {
        paddingTop:100,
    },
    [theme.breakpoints.up('md')]: {
        paddingTop:180,
  
    },
   
  }));

export default function Home() {
  return (
    <Container>
        <Head/>
        <Intro/>
        <Feat>
        <FProduct/>
        </Feat>
        <Custom/>
        <Footer/>
    </Container>
  )
}
