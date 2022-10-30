import React from 'react'
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Tabs,Tab, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink}from 'react-router-dom';

 const Header = () => {
    const [Value, setValue] = useState(0);

   
  return (<div>
    <AppBar sx={{backgroundColor:"#282A35"}} position='sticky'>
    <Toolbar>
      <NavLink to="/" style={{color:"white"}}>
        <Typography>
            <MenuBookIcon/>
        </Typography>
        </NavLink>
        <Tabs  sx={{ml:'auto'}}
        textColor='inherit'
         indicatorColor="primary"
          value={Value}
           onChange={(e,val)=>setValue(val)}>
            <Tab  LinkComponent={NavLink} to="/add" label="Add product"  />
            <Tab  LinkComponent={NavLink} to="/books" label="Books" />
            <Tab  LinkComponent={NavLink} to="/about" label="About us" />
            
        </Tabs>
    </Toolbar>
    </AppBar>
    
    
    </div>
  )
}
export default Header;