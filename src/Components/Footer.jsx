import { Button, Container, styled, TextField, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react'


const Item = styled("div")(({ theme }) => ({
    textAlign:"start",
    padding:50,
    [theme.breakpoints.up('md')]: {
        display:"flex",
        justifyContent:"space-around",
      },
      [theme.breakpoints.down('md')]: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
      },
    }));
    const Sub = styled("div")(({ theme }) => ({
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
        textAlign:"start",
        padding:30,

        }));
        const Mai = styled("div")(({ theme }) => ({
            textAlign:"center",
            display:"flex",
            flexDirection:"column",
            textAlign:"start",
            padding:30,
            [theme.breakpoints.up('md')]: {
                width:700,
              },
              [theme.breakpoints.down('md')]: {
                width:600,

              },
            }));
            const Foot = styled("div")(({ theme }) => ({
                textAlign:"center",
                backgroundColor:"brown",
                [theme.breakpoints.up('md')]: {
                    display:"flex",
                    justifyContent:"center",
                  },
                  [theme.breakpoints.down('md')]: {
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                  },
                }));
export default function Footer() {
  return (
    <Container sx={{position:"relative"}}>
    <Item>
        <Mai>
        <Typography variant='h1' fontSize="30px" sx={{paddingBottom:2}}>
        Join our newsletter and get 20% off
        </Typography>
        <Typography variant='body' fontSize="15px"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi architecto, amet suscipit dolorum cum voluptatibus odio vel quas rem ad nam, a officiis! Recusandae provident quos modi veniam sint.
        </Typography>
        </Mai>
        <Sub>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant='outline'sx={{height:"60px" }}>Subscribe</Button>
        </Sub>
    </Item>
    <Foot>
        <Typography>
        © 2022 ComfySloth
        </Typography>
        <Typography>
        All rights reserved
        </Typography>
    </Foot>
    </Container>
  )
}
