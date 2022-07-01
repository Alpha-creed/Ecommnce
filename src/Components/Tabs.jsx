import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { styled, Tabs } from '@mui/material';
import Home from '../pages/Home';
import About from '../pages/About'
import Product from '../pages/Product';

const TabPos = styled("div")(({theme})=>({
  
  display:"flex",
  justifyContent:"center",

 }))
export default function TabsL() {
  const [val, setVal] = React.useState(0);

  const handleChange = (event, newValue) => {
    setVal(newValue);
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabPos>
      <Tabs value={val} onChange={handleChange}>
        <Tab label="Home"/>
        <Tab label="About"/>
        <Tab label="Product"/>
      </Tabs>
      </TabPos>
      {val === 0 && <Home/>}
      {val === 1 && <About/>}
      {val === 2 && <Product/>}

  </Box>
  );
}
