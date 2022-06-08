import { Stack } from "@mui/material"
import { Typography } from "@mui/material"
import Tabs from "./Tabs"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/material";
import { fontSize } from "@mui/system";


const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display:"flex",
  justifyContent:"center"
}));

// const Root = styled('div')(({ theme }) => ({
//   padding: theme.spacing(1),
//   [theme.breakpoints.down('md')]: {
//     backgroundColor: red[500],
//   },
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: blue[500],
//   },
//   [theme.breakpoints.up('lg')]: {
//     backgroundColor: green[500],
//   },
// }));

function Head(){
    return(
    <Stack  direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 3, sm: 10, md: 40 }}>
      <Item>
        <Typography variant="h3">
            Alpha Code
        </Typography>
        </Item>
        <Item>
        <Tabs/>
        </Item>
        <Item>
          <Typography variant="body2" sx={{paddingRight:"40px",fontSize:"30px"}}>
              Cart
              <ShoppingCartIcon sx={{fontSize:"25px",paddingLeft:"10px"}}/>
            </Typography>  
            <Typography variant="body2" sx={{paddingRight:"40px",fontSize:"30px"}}>
              Login
              <PersonAddAlt1Icon sx={{fontSize:"25px",paddingLeft:"10px",marginTop:"5px"}}/>
            </Typography>
        </Item>
    </Stack>
    )
}

export default Head