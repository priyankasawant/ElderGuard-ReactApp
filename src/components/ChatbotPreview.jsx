// ChatbotPreview Component
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ChatbotPreview = () => (
  <Box my={5}>
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6">AI Emergency Coaching (Coming Soon)</Typography>
      <Typography mt={1} color="text.secondary">
        A virtual assistant trained to guide caregivers during an emergency — offering real-time coaching, triage steps, and more.
      </Typography>
    </Paper>
  </Box>
);

export default ChatbotPreview;
