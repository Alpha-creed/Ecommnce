import { Box, Button, Container, Grid, List, ListItem, ListItemButton, ListItemText, Stack, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import SingleProduct from '../SingleProduct';
import SideBar from './SideBar';
import { useGlob } from '../Context';
import { AddToDb, getStoredCart,removeFromDb,clearTheCart } from '../Cart/localDb';
import { Cart } from '../Cart/Cart';

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
        const savedCart = getStoredCart();
        const savedProducts = [];
        let quantity;
        for (const key in savedCart) {
                quantity = +savedCart[key]
            //    quantity = data.find(product => product.key === key);
            
        }
    //     // savedProducts.push(savedProducts);
    // //    let clonedArray = savedProducts.map(a => {return {...a}}) 
    //     if(savedCart.length){
    //     
    //             // console.log(quantity)
    //             const savedProduct = data.find(product => product.key === key);
    //             if(savedProduct){
    //             }
    //             // console.log(savedProducts)
    //             updateCart(savedProducts);
    //             // console.log(cart)
    //         }
    //     }

    if(loading){
        return(
            <Box>
                <Typography variant="body">
                    Loading...
                </Typography>
            </Box>
        )
        
    }
    // const savedCart = getStoredCart();

// const AdCart=(id)=>{
//     console.log(id)
// }
    // const AddCart = (Id)=>{
    //     const checkAlreadyAdded = cart.find(addedProduct => Id === addedProduct)
    //     if(!checkAlreadyAdded){
    //         Id = 1
    //         const newCart = [...cart,Id]
    //         updateCart(newCart)
    //         AddToDb(Id)
    //     }else{
    //         checkAlreadyAdded[Id] +=1;
    //         const addedCart = [...cart]
    //         updateCart(addedCart)
    //         AddToDb(Id)
    //     }
    // }

    const Item = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        border:"2px solid black",
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

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Box>
                    <Typography variant="h3" fontSize="20px">
                        Catergory

                    </Typography>
                    <SideBar filter={filter} />
                    </Box>
                 </Grid>
                <Grid item xs={10}>
                {/* <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 20, md: 32 }}> */}
                <High>
                   {console.log(quantity)} 
                {data.map((e,i)=>{
                const {  id,  name, price, image } = e;

                return ( 
                <Full>
                <SingleProduct  key={id} name={name} image={image} price={price} AddToCart={()=>AddToDb(id)} ClearCart={()=>removeFromDb(id)} />
                </Full>
                        )        // </Grid>
                                
                    })}
                    <Full>
                        <Cart cart={cart}></Cart>
                    </Full>
                    </High>

                    {/* </Grid> */}
                </Grid>
            </Grid>
        </Container>
    
    )
}
