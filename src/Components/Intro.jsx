import { Box, Button, Grid, styled, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex';
import { Container } from '@mui/system'
import React from 'react'


const Item = styled("div")(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      display:"none"
    },
    [theme.breakpoints.up('md')]: {
      display:"block",
    },
  }));

  const TextsHead = styled("div")(({ theme }) => ({   
    ...theme.typography.h2,
    fontWeight:"1000",
    // backgroundColor:"#d7ccc8",
    color:"#071233",
      [theme.breakpoints.down('md')]: {
        width:"200px" ,
        fontSize:"20px",
        paddingBottom:15,

      },
      [theme.breakpoints.up('md')]: {
        width:"300px" ,
        fontSize:"40px",
        paddingBottom:30,

      },
    }));

  const TextsDesc = styled("div")(({ theme }) => ({   
    ...theme.typography.body2,
    // backgroundColor:"#d7ccc8",
    color:"lightBlue",

      [theme.breakpoints.down('md')]: {
        width:"270px"  ,
        paddingBottom:15
      },
      [theme.breakpoints.up('md')]: {
        width:"370px"  ,
        paddingBottom:30
      },
    }));

export default function Intro() {
  return (
    <Grid container spacing={2} justifyContent="space-around" sx={{paddingTop:5}}>
        <Grid item xs={6} >
            <Container maxWidth="sm">
            <TextsHead>
                Design Your Comfort Zone
                </TextsHead>
            <TextsDesc>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Fugiat inventore vel reiciendis. Ex, dolore 
                pariatur, dignissimos, cupiditate obcaecati dolores
                totam dolorum voluptatem itaque impedit nisi 
                officia sapiente ratione eum ipsum!
                </TextsDesc>
            <Button variant="contained" sx={{backgroundColor:"#663011"}}>
                SHOP NOW
            </Button>
            </Container>
        </Grid>
        <Grid item xs={6}>
        <Item>

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
    </Item>
        </Grid>
    </Grid>
  )
}
