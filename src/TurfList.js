import React from "react";
import Navbar from "./Navbar";
import image1 from "./assets/turf1.jpg";
import image2 from "./assets/turf2.jpg";
import image3 from "./assets/turf3.jpg";
import image4 from "./assets/turf4.jpg";
import image5 from "./assets/turf5.jpg";
import image6 from "./assets/turf6.jpg";
import image7 from "./assets/turf7.jpg";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
  Box,
  Stack,
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { useNavigate } from "react-router-dom";

function TurfList() {
  const navigate = useNavigate();

  const turfs = [
    { _id: "1", name: "Vishwas Garden", ratePerHour: 700, img: image1 },
    { _id: "2", name: "HomeGround", ratePerHour: 700, img: image2 },
    { _id: "3", name: "PlayBox", ratePerHour: 600, img: image3 },
    { _id: "4", name: "Kage", ratePerHour: 800, img: image4 },
    { _id: "5", name: "DonBosco", ratePerHour: 800, img: image5 },
    { _id: "6", name: "Hattrick", ratePerHour: 900, img: image6 },
    { _id: "7", name: "BigBounce", ratePerHour: 1000, img: image7 },
  ];

  return (
    <div>
      <Navbar/>
    <Container sx={{ py: 6 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight={600}>
          ⚽ Available Turfs for Booking
        </Typography>
       
      </Stack>

      <Grid container spacing={4}>
        {turfs.map((turf) => (
          <Grid item key={turf._id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                mx: "auto",
                borderRadius: 3,
                boxShadow: 5,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={turf.img}
                alt={turf.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" fontWeight="bold">
                  {turf.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ₹{turf.ratePerHour} per hour
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<SportsSoccerIcon />}
                  sx={{ textTransform: "none" }}
                >
                  Book Now
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<LocationOnIcon />}
                  sx={{ textTransform: "none" }}
                >
                  Location
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
}

export default TurfList;
