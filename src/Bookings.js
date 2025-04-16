import React, { useEffect, useState } from "react";
import "./Bookings.css"
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchBookings = async () => {
      const userData = JSON.parse(localStorage.getItem("User"));
      try {
        const response = await axios.get("https://urbanplaybackendserver.onrender.com/bookings", {
          headers: {
            user: userData.name,
          },
        });
        setBookings(response.data);
        console.log(response.data); // Log the response data to verify it
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="container">
      <Box sx={{ padding: 4 }}>
        <Typography variant="h3" gutterBottom color="white">
          My Bookings
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : bookings.length === 0 ? (
          <Typography variant="body1">No bookings found.</Typography>
        ) : (
          <Grid container spacing={3}>
            {bookings.map((booking) => (
              <Grid item xs={12} sm={6} md={4} key={booking._id}>
                <Card sx={{ borderRadius: 3, boxShadow: 3, minHeight: 200 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {booking.turfName}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Rate:</strong> ₹{booking.rate}
                    </Typography>
                    <Typography variant="body2">
                      <strong>User:</strong> {booking.user}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Booking ID: {booking._id.slice(-6).toUpperCase()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default Bookings;
