import { styled, Typography } from '@mui/material';
import React from 'react'

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
export default function End() {
  return (
    <Foot>
        <Typography>
        © 2022 ComfySloth
        </Typography>
        <Typography>
        All rights reserved
        </Typography>
    </Foot>
  )
}
