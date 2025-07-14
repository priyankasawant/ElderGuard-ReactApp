// InvestorSlider Component

import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const investors = [
  "Sequoia Capital", "SoftBank", "Accel", "Tiger Global", "Lightspeed",
];

const InvestorSlider = () => (
  <Box p={4} bgcolor="#f5f5f5">
    <Typography variant="h5" gutterBottom>
      Our Esteemed Investors
    </Typography>
    <Grid container spacing={2}>
      {investors.map((inv, i) => (
        <Grid key={i} item xs={6} sm={4} md={2}>
          <Box p={2} border={1} borderRadius={2} textAlign="center">{inv}</Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default InvestorSlider;
