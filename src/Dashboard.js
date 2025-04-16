// src/components/Dashboard.js
import Navbar from "./Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Stack,
  Box,
} from "@mui/material";
import "./Dashboard.css"

function Dashboard() {
  const navigate = useNavigate();

  const infoUser = JSON.parse(localStorage.getItem("User"));

  return (
  <div className="dashboard-container">
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome, {infoUser?.name}
          </Typography>

          <Typography variant="h6" align="center" gutterBottom>
            Balance: ₹{infoUser?.balance}
          </Typography>

          <Box mt={4}>
            <Stack spacing={2} direction="column" alignItems="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/turfs")}
                fullWidth
              >
                View Available Turfs
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  localStorage.removeItem("User");
                  navigate("/", { replace: true });
                }}
                fullWidth
              >
                Logout
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Container>
    </div>
    
  );
}

export default Dashboard;
