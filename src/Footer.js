import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Instagram,
  Facebook,
  Twitter,
  SportsSoccer,
} from "@mui/icons-material";
import "./Footer.css"

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        color: "white",
       
       
        
      }}
    >
      <Grid container spacing={4} padding={"20px"}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            UrbanPlay
          </Typography>
          <Typography variant="body2" color="gray">
            Book your turf, beat the stress. UrbanPlay is your go-to platform for easy and fast turf booking!
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Quick Links
          </Typography>
          <Link href="" underline="hover" color="inherit" display="block">
            Home
          </Link>
          <Link href="" underline="hover" color="inherit" display="block">
            My Bookings
          </Link>
          <Link href="" underline="hover" color="inherit" display="block">
            Contact Us
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Connect With Us
          </Typography>
          <Box>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{ color: "#e1306c" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{ color: "#1877f2" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{ color: "#1da1f2" }}
            >
              <Twitter />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

      <Box textAlign="center">
        <Typography variant="body2" color="gray">
          © {new Date().getFullYear()} UrbanPlay ⚽ | All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
