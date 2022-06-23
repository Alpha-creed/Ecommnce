import {Box, Container, styled, Typography } from '@mui/material'
import React from 'react'

const Item =  styled('div')(({ theme }) => ({
    display:"flex",
    justifyContent:"space-around"

}));
const ConstIm =  styled('img')(({ theme }) => ({
        width:500,
        height:600,
        borderRadius:"5px",
        paddingTop:95
      }));

export default function About() {
  return (
    <Container>
      <Item>
        <Box>
          <ConstIm src="https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f?ts=1655416855&userId=usrQMwWEPx18KgLcP&cs=67ea67bb779281de"/>
          </Box>
          <Box sx={{width:400,paddingTop:5}}>
            <Typography variant="h2" fontWeight="1000" fontSize="30px" sx={{padding:2}}>
              Our Story
            </Typography>
            <Typography variant="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, inventore amet earum expedita sed quidem suscipit ratione nisi, doloremque quos pariatur rem reiciendis. Eaque minima numquam sint quidem tenetur neque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, inventore amet earum expedita sed quidem suscipit ratione nisi, doloremque quos pariatur rem reiciendis. Eaque minima numquam sint quidem tenetur neque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, inventore amet earum expedita sed quidem suscipit ratione nisi, doloremque quos pariatur rem reiciendis. Eaque minima numquam sint quidem tenetur neque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, inventore amet earum expedita sed quidem suscipit ratione nisi, doloremque quos pariatur rem reiciendis. Eaque minima numquam sint quidem tenetur neque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, inventore amet earum expedita sed quidem suscipit ratione nisi, doloremque quos pariatur rem reiciendis. Eaque minima numquam sint quidem tenetur neque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, inventore amet earum expedita sed quidem suscipit ratione nisi, doloremque quos pariatur rem reiciendis. Eaque minima numquam sint quidem tenetur neque.

            </Typography>
            </Box>
      </Item>
    </Container>
  )
}
