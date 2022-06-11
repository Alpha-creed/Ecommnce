import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export default function Intro() {
  return (
    <Grid container spacing={2} justifyContent="space-around">
        <Grid item xs={6} >
            <Container maxWidth="sm">
            <Box sx={{width:"400px", fontSize:20,fontWeight:"Bold" ,color:"blue"}}>
            <Typography variant="h2">
                Design Your Comfort Zone
            </Typography>
            </Box>
            <Box sx={{width:"370px"}} mb={5} mt={5}>
            <Typography variant="body2" sx={{color:"lightBlue"}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Fugiat inventore vel reiciendis. Ex, dolore 
                pariatur, dignissimos, cupiditate obcaecati dolores
                totam dolorum voluptatem itaque impedit nisi 
                officia sapiente ratione eum ipsum!
            </Typography>
            </Box>
            <Button variant="contained">
                SHOP NOW
            </Button>
            </Container>
        </Grid>
        <Grid item xs={6}>
    <Container
      component="div"
      variant="body1"
      style={{
        height: 100,
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 70,
          left: 20,
          zIndex: 'tooltip',
        }}
      >
            <img src= 'https://images.unsplash.com/photo-1533827432537-70133748f5c8' width="500px"/>
         </Box>
      <Box
        sx={{
          p: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 0,
          left: 83,
          zIndex: 'modal',
          
        }}
      >
        <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" alt=""   width="500px"/>
      </Box>
    </Container>
        </Grid>
    </Grid>
  )
}
