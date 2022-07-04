import { Stack } from "@mui/material"
import { Typography,Box } from "@mui/material"
import Tabs from "./Tabs"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/material";
import { fontSize } from "@mui/system";
// import useState from "React"
import CloseIcon from '@mui/icons-material/Close';
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TaskIcon from '@mui/icons-material/Task';
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Divider } from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import TocIcon from '@mui/icons-material/Toc';
import { SwipeableDrawer } from "@mui/material";
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import { useState } from "react";
import { brown } from "@mui/material/colors";
import { Badge } from "@mui/material";
import {useGlobal} from './Context'
import {Route,Routes,BrowserRouter as Router, Link} from "react-router-dom"
import About from '../pages/About'
import Home from '../pages/Home'
import Product from "../pages/Product";
import Test from "./Test";
import SmallTab from "./Test";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display:"flex",
  justifyContent:"center",
  border:"2px"
}));
const Close = styled("div")(({ theme }) => ({
  paddingTop:"25px",
  display:"flex",
  flexWarp:"wrap"
}));

const Small = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    display:"block"
  },
  [theme.breakpoints.up('md')]: {
      display:"none"
  },
}))

  const Frame = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width:450
        },
    [theme.breakpoints.up('md')]: {
      width:750    },
   
}))

const Full = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    display:"none"
  },
  [theme.breakpoints.up('md')]: {
      display:"block"
  },
 
}));
const Left = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  position:"absolute",
  display:"flex",
  ...theme.typography.h3,
  [theme.breakpoints.down('md')]: {
    display:"none"
  },
  [theme.breakpoints.up('md')]: {
      left:60,
      top:"5px"
  },
}));
const Right = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  position:"absolute",
  display:"flex",
  [theme.breakpoints.down('md')]: {
    display:"none"
  },
  [theme.breakpoints.up('md')]: {
      right:"0",
      top:"12px"
  },
}));
function Head(){
const [state,setState] = useState(false)
const [count,setCount] = useState(1)
// const {badge} =useGlobal()

const toggleDrawer = (anchor,open) =>(event)=>{
  if(event && event.type === 'keydown' && (event.key === 'Tab' || event.key ===
  "Shift")){
    return;
  }
  setState({...state,[anchor]:open})
}

const list = (anchor) =>(
  <Frame 
  role="presentation">
        <Stack spacing={3} direction="row" justifyContent="space-evenly " >
          <Item>
            <Box sx={{width:"100px"}}>
        <Typography variant="h3">
            Alpha 
        </Typography>
        </Box>
        </Item>
        <Close >
      <CloseIcon onClick={toggleDrawer(anchor,false)} onKeyDown={toggleDrawer(anchor,false)}/>
      </Close>
      </Stack>
    <List>
    <ListItemButton button component={Link} to="/">
          <ListItem disablePadding>
              <ListItemIcon>
              <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home"/>
              </ListItem>
              </ListItemButton>
              <ListItemButton  button component={Link} to="/about">
              <ListItem disablePadding>
              <ListItemIcon>
                <InfoIcon/>
              </ListItemIcon>
              <ListItemText primary="About"/>
              </ListItem>
              </ListItemButton>
              <ListItemButton button component={Link} to="/product">
              <ListItem disablePadding>
              <ListItemIcon>
              <TaskIcon/>
              </ListItemIcon>
              <ListItemText primary="Product"/>
          </ListItem>
          </ListItemButton>
    </List>
    <Divider/>
            <List>
       

    <ListItemButton disableTouchRipple disableRipple>
      <Box  sx={{width:"130px"}}>
      <ListItemButton >
          <ListItem disablePadding>
          <ListItemText primary="Cart"/>
              <ListItemIcon>
              <ShoppingCartIcon/>
              </ListItemIcon>
              </ListItem>
              </ListItemButton>
              </Box>
              
              <Box  sx={{width:"140px"}}>
      <ListItemButton>
              <ListItem disablePadding>
              <ListItemText primary="Login"/>
              <ListItemIcon>
              <PersonAddAltIcon/>
              </ListItemIcon>
              </ListItem>
              </ListItemButton>
              </Box>
              </ListItemButton>
            
    </List>
  </Frame>

)
  return(
    <Container>
              <Full>
             <Left>
            Alpha Code
        </Left>    
             <Tabs/>
             <Right>
             <Typography variant="body2" sx={{paddingRight:"40px",fontSize:"30px",display:"flex"}}>
              Cart
             <Badge badgeContent={0} color="primary">
              <ShoppingCartIcon sx={{fontSize:"35px",paddingLeft:"10px",paddingTop:"12px"}}/>
              </Badge>
            </Typography>  
          
            <Typography variant="body2" sx={{paddingRight:"40px",fontSize:"30px" ,display:"flex"}}>
              Login
              <PersonAddAlt1Icon sx={{fontSize:"35px",paddingLeft:"10px",marginTop:"5px",paddingTop:"5px"}}/>
            </Typography>
            </Right>
             </Full>
             <Small>
              <Router>
        <SmallTab/>
        </Router>
    </Small>
    </Container>
    )
}

export default Head