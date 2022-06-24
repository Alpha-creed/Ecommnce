import { Box, Button, Link, Paper, Stack, styled, Typography ,Modal} from '@mui/material'
import React from 'react'
import { SwipeableDrawer } from "@mui/material";


  const Imgs = styled('img')(({ theme }) => ({
    display:"flex",
    flexWrap:"wrap",
    [theme.breakpoints.down('md')]: {
    //   display:"none"
      width:600,
      height:200,
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
        width:200,
        height:150,
    },
    [theme.breakpoints.down('sm')]: {
      display:"none",
      
    },
  }));
  const CardImg = styled('img')(({ theme }) => ({
    display:"flex",
    flexWrap:"wrap",
    [theme.breakpoints.down('md')]: {
    //   display:"none"
      width:280,
      height:200,
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
        width:100,
        height:150,
    },
    [theme.breakpoints.down('sm')]: {
      display:"none",
      
    },
  }));
  const ImgsConst = styled('img')(({ theme }) => ({
    paddingLeft:0 ,
    [theme.breakpoints.down('sm')]: {
      display:"block",
      width:200,
      height:200,
    },
    [theme.breakpoints.up('sm')]: {
      display:"none"
    },
  }));
  const ImgsCard = styled('img')(({ theme }) => ({
    paddingLeft:0 ,
    [theme.breakpoints.down('sm')]: {
      display:"block",
      width:200,
      height:50,
    },
    [theme.breakpoints.up('sm')]: {
      display:"none"
    },
  }));
  // const Full= styled('div')(({ theme }) => ({
  //   [theme.breakpoints.up('md')]: {
  //     width:200,
  //     paddingRight:20
  //   }
  // }))
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

  const Btn = styled("div")(({ theme }) => ({
    display:"flex",
    [theme.breakpoints.down('md')]: {
      flexDirection:"row",
      justifyContent:"space-evenly"
    },
  }));
export default function SingleProduct(props) {
  const {id,name,image,price,AddToCart,ClearCart} = props.product
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <Box sx={{width:"auto"}}>
        <Imgs src={image} alt={name}  />
        <ImgsConst src={image} alt={name}  />
        <Button onClick={handleOpen}>View Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyleMod>
        <CardImg src={image} alt={name}  />
        <ImgsCard src={image} alt={name}  />
        <Stack direction="row" justifyContent="space-around" > 
            <Typography>{name}</Typography>
            <Typography>${price}</Typography>
        </Stack> 
        {/* <Button onClick={()=>AddToCart(props)}>Add to cart</Button>
        <Button onClick={()=>ClearCart(props)}>clear Items</Button> */}
                <Btn>
        <Button onClick={()=>props.handleAddToCart(props.product)}>add </Button>
        <Button onClick={()=>props.handleRemoveFromCart(props.product)}>remove</Button>
        </Btn>
        </StyleMod>
      </Modal>
    


</Box>

  )
}
