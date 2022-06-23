import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image';

export default function CartItem(props) {
    const {name,price,image} = props
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img src={image} alt={props}/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={price} />
    </ListItem>
  </List>
  )
}
