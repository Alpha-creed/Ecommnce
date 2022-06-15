import { Button, Container } from '@mui/material'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import { Link } from '@mui/material'
import { Stack } from '@mui/material'
import { styled } from '@mui/material'
import { Typography } from '@mui/material'
import { Divider } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { lightBlue } from '@mui/material/colors'
import { useState } from 'react'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import SingleProduct from './SingleProduct'

const url="https://course-api.com/react-store-products?_limit=3"



const Small = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
      display:"block"
  },
  [theme.breakpoints.up('md')]: {
      display:"flex",
     justifyContent:"space-evenly"
      // padding: theme.spacing(6),

  },
  position:"relative"
 
}));
const Btn = styled('div')(({ theme }) => ({
  margin: 0,
  position:"absolute",
  [theme.breakpoints.down('md')]: {
    Bottom:0,
    left:250 
  },
  [theme.breakpoints.up('md')]: {
   top: 500,
   left:700 

  },
 
}));

  const add = (a) => a.slice(0,3);

export default function FProduct() {
  const [hover,setHover] = useState(false);


  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  let i=0
  const [loading,setLoading] = useState(true);
    const [items,setItems] = useState([])
    const [num,setNum] =useState(0)
    const reduce = []
    const fetchItems = async() =>{
        setLoading(true)
        try{
            const response = await fetch(url)
            const stuffs=await response.json()
            setLoading(false)
            console.log(stuffs)
            setItems(add(stuffs))
            console.log(items)
        }catch(error){
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchItems()
    },[])
    if(loading){
        return(
            <Box>
                <Typography variant="body">
                    Loading...
                </Typography>
            </Box>
        )
        
    }


   
  return (
    <Container sx={{backgroundColor:"#E6F7FF",padding:10}}>
      <Typography variant="h3">
          Featured Product
      </Typography>
      <Divider/>
      <Small>
      {items.map((e,i)=>{
            const {  id,  name, price, image } = e;
                          return <SingleProduct  key={id} name={name} image={image} price={price}/>;
                            
                 })}
                 </Small>
                  <Btn>
                 <Button href="www.google.com" sx={{ }} variant="contained">All Products</Button>
                 </Btn>
    </Container>
  )
}
