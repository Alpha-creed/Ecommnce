import { TabContext,TabList,TabPanel } from "@mui/lab"
import { Tab } from "@mui/material";
import { Box } from "@mui/material"
import { useState } from "react"
import About from "../pages/About";
import Home from "./Intro";
import Product from "../pages/Product";

export default function Tabs(){
    const [value,setValue] = useState("1");
   
    const handleChange = (event,newValue)=>{
        setValue(newValue);
    }
    return(
        <Box>
            <TabContext value={value}>
                <Box>
                    <TabList onChange={handleChange}>
                        <Tab label="Home" value="1"/>
                        <Tab label="About" value="2"/>
                        <Tab label="Product" value="3"/>
                    </TabList>
                </Box>
                <TabPanel value="1"></TabPanel>
                <TabPanel value="2"><About/></TabPanel>
                <TabPanel value="3"><Product/></TabPanel>
            </TabContext>
        </Box>
    )
}