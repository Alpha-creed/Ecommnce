import { Container } from '@mui/material'
import React from 'react'
import Head from '../Components/Header'
import Intro from '../Components/Intro'

export default function Home() {
  return (
    <Container>
        <Head/>
        <Intro/>
    </Container>
  )
}
