import { Container, styled } from '@mui/material'
import React from 'react'
import Custom from '../Components/Custom'
import Footer from '../Components/Footer'
import FProduct from '../Components/FProduct'
import Head from '../Components/Header'
import Intro from '../Components/Intro'

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
