import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={8}>
            <Box sx={{width:"400px"}}>
            <Typography variant="h2">
                Design Your Comfort Zone
            </Typography>
            </Box>
            <Typography variant="body2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Fugiat inventore vel reiciendis. Ex, dolore 
                pariatur, dignissimos, cupiditate obcaecati dolores
                totam dolorum voluptatem itaque impedit nisi 
                officia sapiente ratione eum ipsum!
            </Typography>
            <Button variant="contained">
                SHOP NOW
            </Button>
        </Grid>
    </Grid>
  )
}
