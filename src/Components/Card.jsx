import { Avatar, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ExploreIcon from '@mui/icons-material/Explore';

export default function Card() {
  return (
      <Card sx={{ minWidth: 275 }}>
        <CardHeader>
            <Avatar>
            <ExploreIcon/>
            </Avatar>
            <Typography variant='h1' fontWeight="500">
                Mission
            </Typography>
        </CardHeader>
      <CardContent>
        <Typography variant="body2"  sx={{width:"300px"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
        </Typography>
      </CardContent>
    </Card>
    
  )
}
