import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import Home from '../pages/Home';
import About from '../pages/About'
import Product from '../pages/Product';

export default function TabsL() {
  const [val, setVal] = React.useState(0);

  const handleChange = (event, newValue) => {
    setVal(newValue);
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Tabs value={val} onChange={handleChange}>
        <Tab label="Home"/>
        <Tab label="About"/>
        <Tab label="Product"/>
      </Tabs>
      {val === 0 && <Home/>}
      {val === 1 && <About/>}
      {val === 2 && <Product/>}

  </Box>
  );
}
