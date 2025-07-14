// Pricing Table

import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';

const PricingTable = () => (
  <Box textAlign="center" my={4}>
    <Paper elevation={3} sx={{ maxWidth: 500, margin: "auto", p: 4 }}>
      <Typography variant="h5">Early Access</Typography>
      <Typography mt={2} color="text.secondary">
        Pay $39.99 now and get lifetime access by signing up!<br />
        
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>Checkout</Button>
    </Paper>
  </Box>
);

export default PricingTable;
