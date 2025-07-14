// Dashboard Page

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider
} from "@mui/material";

import UploadVideo from '../components/UploadVideo';
import LiveFeed from '../components/LiveFeed';

const Dashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
       <Typography variant="h4" textAlign="center" mb={3}>
        ElderGuard AI – Fall Detection
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Real-time monitoring, system alerts, and emergency triggers.
      </Typography>

      <Divider sx={{ my: 3 }} />

     

            {/* Placeholder for video feed */}
            <UploadVideo></UploadVideo>
          
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

