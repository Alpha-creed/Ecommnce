import { Button, Container, styled, TextField, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react'
import End from '../End';


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
      [theme.breakpoints.down("sm")]:{
        display:"none",
      }
    }));
    const Cell = styled("div")(({theme})=>({
        [theme.breakpoints.down("sm")]:{
            display:"block",
            width:100,
            fontSize:"12px",
            paddingTop:12,
            paddingBottom:22

          },
          [theme.breakpoints.up("sm")]:{
            display:"none",

          }
        }))
    const Contain = styled("div")(({theme})=>({
        [theme.breakpoints.down("sm")]:{
            width:"20px",
            paddingTop:5,

          }
    }))
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
            flexWrap:"wrap",
            textAlign:"start",
            paddingBottom:30,
            [theme.breakpoints.up('md')]: {
                width:700,
              },
              [theme.breakpoints.down('md')]: {
                width:600,

              },
            }));
          
export default function Footer() {
  return (
    <Container sx={{position:"relative"}}>
    <Item>
        <Mai>
<Typography variant='h1' fontSize="15px" sx={{paddingBottom:2}}>
        Join our newsletter and get 20% off
        </Typography>
        <Sub>
        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        <Button variant='outline'sx={{height:"60px" }}>Subscribe</Button> 
        </Sub>
        <Typography variant='body' fontSize="15px"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi architecto, amet suscipit dolorum cum voluptatibus odio vel quas rem ad nam, a officiis! Recusandae provident quos modi veniam sint.
        </Typography>
        </Mai>
       
    </Item>
<Cell>
<Typography variant='h1' fontSize="15px" sx={{paddingBottom:2}}>
        Join our newsletter and get 20% off
        </Typography>
            <Contain>
            <input/>
            </Contain>
        <Button variant='outline'sx={{height:"30px" }}>Subscribe</Button> 
</Cell>
  <End/>
    </Container>
  )
}
