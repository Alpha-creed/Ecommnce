import { Box, Button, Container, Grid, List, ListItem, ListItemButton, ListItemText, Modal, Paper, Stack, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import SingleProduct from '../SingleProduct';
import SideBar from './SideBar';
import { AddToDb, getStoredCart,removeFromDb,clearTheCart } from '../Cart/localDb';
import { Cart } from '../Cart/Cart';
import CloseIcon from '@mui/icons-material/Close';
import TocIcon from '@mui/icons-material/Toc';
import { SwipeableDrawer } from "@mui/material";



const url="https://course-api.com/react-store-products"

// 
export default function ProdDisplay() {
    // const {data,setData,items} = useGlob()

    // const {items,fetchItems} = useGlob;
    const [loading,setLoading] = useState(true);
    const [items,setItems] = useState([])
    const [data,setData] = useState(items)
    const [num,setNum] =useState(0)
    const [categories, setCategories] = useState();
    const [cart,updateCart] = useState([])
    const [open, setOpen] = React.useState(false);
    const [state,setState] = useState(false)
const [count,setCount] = useState(1)
  

const toggleDrawer = (anchor,open) =>(event)=>{
  if(event && event.type === 'keydown' && (event.key === 'Tab' || event.key ===
  "Shift")){
    return;
  }
  setState({...state,[anchor]:open})
}
const Small = styled('div')(({ theme }) => ({
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
        width:250
          },
      [theme.breakpoints.up('md')]: {
        width:750    },
     
  }))
  const Close = styled("div")(({ theme }) => ({
    paddingTop:"25px",
    display:"flex",
    flexWarp:"wrap"
  }));
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    const fetchItems = async() =>{
        setLoading(true)
        try{
            const response = await fetch(url)
            console.log(response)
            const stuffs=await response.json()
            setLoading(false)
            // console.log(stuffs)
            setItems(stuffs)
        }catch(error){
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchItems()
        
    },[])
    useEffect(() => {
        const savedCart = getStoredCart();
        const savedProducts = [];
        if(data.length){
            for (const key in savedCart) {
                const quantity = savedCart[key]
                const savedProduct = data.find(product => product.key === key);
                if(savedProduct){
                    savedProduct.quantity = quantity;
                    savedProducts.push(savedProduct);
                }
                updateCart(savedProducts);
            }
        }
    },[data]);

    const handleAddToCart = (product) =>{
        const checkAlreadyAdded = cart.find(addedProduct => product.key === addedProduct.key);
        if(!checkAlreadyAdded){
            product.quantity = 1;
            const newCart = [...cart, product];
            updateCart(newCart);
            AddToDb(product.key);
        } else {
            checkAlreadyAdded["quantity"] += 1;
            const updatedCart = [...cart];
            updateCart(updatedCart);
            AddToDb(product.key);
        }
    }
    const handleRemoveFromCart = (product) =>{
        const checkAlreadyAdded = cart.find(addedProduct => product.key === addedProduct.key);
        if(!checkAlreadyAdded){
            product.quantity = 0;
            const newCart = [...cart, product];
            updateCart(newCart);
            removeFromDb(product.key);
        } else {
            checkAlreadyAdded["quantity"] -= 1;
            const updatedCart = [...cart];
            updateCart(updatedCart);
            removeFromDb(product.key);
        }
    }

    if(loading){
        return(
            <Box>
                <Typography variant="body">
                    Loading...
                </Typography>
            </Box>
        )
        
    }

    const Item = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  const filter = (category) => {
    if (category === 'all') {
        setData(items);
        return;
      }
    const newItems = items.filter((item) => item.category === category);
    setData(newItems);

  };
  const StyleMod = styled(Paper)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    [theme.breakpoints.down('md')]: {
        width: 200,
          },
    [theme.breakpoints.up('md')]: {
        width: 500,
              }
  }))

  
  
  
  
  const High= styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display:"flex",
        flexWrap:"wrap",
    }
  }))
  const Full= styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      width:200,
      paddingRight:20,
      paddingTop:10

    }
  }))
  const FullCat = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display:"none"
    },
    [theme.breakpoints.up('md')]: {
        display:"block"
    },
   
  }));
  
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
      <ListItemButton>
      <SideBar filter={filter} />
            </ListItemButton>
      </List>
      </Frame>
  )
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <FullCat>
                    <Box>
                    <Typography variant="h3" fontSize="20px">
                        Catergory

                    </Typography>
                    <SideBar filter={filter} />
                    </Box>
                    </FullCat>
                    <Small>
     
              <TocIcon onClick={toggleDrawer("left",true)} sx={{paddingTop:"5px" ,fontSize:"40px" ,color:"#A14C1B"}}/>
              <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left",false)}
              onOpen={toggleDrawer("left",true)}>
                {list("left")}
              </SwipeableDrawer>
    </Small>
                 </Grid>
                <Grid item xs={10}>
                {/* <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 20, md: 32 }}> */}
      <Button onClick={handleOpen}>Cart Summary</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyleMod>
            <Box>
        <Cart cart={cart}></Cart>
        </Box>
        </StyleMod>
      </Modal>
      <High>

                    {data.map(product=>{
                        return(
                        <Full>
                        <SingleProduct key={product.key} product={product} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>
                        </Full>
                        )
                    })}
                    </High>

                    {/* </Grid> */}
                </Grid>
            </Grid>

        </Container>
    
    )
}
