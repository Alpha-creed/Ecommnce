import { TabContext,TabList,TabPanel } from "@mui/lab"
import { Tab,Tabs } from "@mui/material";
import { Box } from "@mui/material"
import { useState } from "react"
import Home from "./Home/Intro";
import Product from "../pages/Product";

function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  

export default function TabsConst(){
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <Box>
            <Tabs value={value} onChange={handleChange} >
              <LinkTab label="Home" href="" />
              <LinkTab label="About" href="../pages/About" />
              <LinkTab label="Product" href="" />
            </Tabs>
        </Box>
        
    )
}