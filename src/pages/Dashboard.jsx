// Dashboard Page

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  useTheme,
  Container,
} from "@mui/material";

import UploadVideo from '../components/UploadVideo';
import LiveFeed from '../components/LiveFeed';

const Dashboard = () => {
  const theme = useTheme();
  return (
    <Box >
       <Box
        sx={{
          backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: "#fff",
          py: 10,
          
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          {/* Header */}
        
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            🧠 ElderGuard AI Dashboard
          </Typography>
          <Typography variant="subtitle1">
            Real-time monitoring, system alerts, and emergency triggers.
          </Typography>
        </Container>
      </Box>

     <Container>
      
        

        <UploadVideo></UploadVideo>
          
          </Container>

     

            {/* Placeholder for video feed */}
           
        {/* Right Panel - Status */}
        {/*<Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              🚨 System Status
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              • Fall detection: <strong style={{ color: "green" }}>Active</strong> <br />
              • Audio alert engine: <strong>Enabled</strong> <br />
              • Emergency SMS status: <strong>Ready</strong> <br />
              • Last alert: <strong>None</strong> <br />
              • Server latency: <strong>Low</strong>
            </Typography>

            <Button variant="contained" color="error">
              Trigger Test Alert
            </Button>
          </Paper>
        </Grid>*/}
     
    </Box>
  );
};

export default Dashboard;

