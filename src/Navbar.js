// src/components/Navbar.js
import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Autocomplete } from '@mui/material';
import { useNavigate, Link,useLocation } from 'react-router-dom'



function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("User");
    navigate("/");
  };
  const isLogin=localStorage.getItem("User");

  console.log(location.pathname)


  return (
    <div>
    <AppBar position="static" sx={{ bgcolor: '#1e88e5',width:"100%", height:"100%" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={isLogin ?"/dashboard" :null} style={{ textDecoration: 'none', color: 'white' }}>
            UrbanPlay
          </Link>
          
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
    
    { isLogin?<Button color="inherit" disabled={location.pathname==="/bookings"} onClick={()=>{navigate("/bookings")}}>Bookings</Button>:null}
  </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
    
          { isLogin?<Button color="inherit" onClick={handleLogout}>Logout</Button>:null}
        </Box>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default Navbar;
