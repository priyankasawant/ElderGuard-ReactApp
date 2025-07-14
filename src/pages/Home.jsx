import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Paper,
  Chip,
  Avatar
} from "@mui/material";
import ShieldIcon from "@mui/icons-material/Shield";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import AssistantIcon from "@mui/icons-material/Assistant";
import PricingTable from '../components/PricingTable';
import bgImage from "../istockphoto-688224280-1024x1024.jpg";
const Home = () => {
  return (
    <Box>
    
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pt: 0,
          px: 0,
        }}
      >
        <Container >
          <Grid container  alignItems="center">
            {/* Left: Text */}
            <Grid item >
              <Chip label="NEW" color="warning" sx={{ mb: 0 }} />
              <Typography variant="h3" fontWeight="bold" >
                The World's Most Advanced <span style={{ color: "#1976d2" }}>AI Emergency Response</span> System
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Revolutionary AI-powered emergency response coaching for seniors. Providing intelligent,
                real-time assistance when it matters most.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button variant="contained" size="large">
                  Get Started, Risk-Free
                </Button>
                <Button variant="outlined" size="large" sx={{ bgcolor: "#fff" }}>
                  Call (555) 123-4567
                </Button>
              </Box>
              <Typography variant="caption" display="block" sx={{ mt: 2 }}>
                30-Day Money-Back Guarantee
              </Typography>
            </Grid>

            {/* Right: Device Card
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 3,
                  boxShadow: 3,
                  p: 3,
                  maxWidth: 360,
                  ml: "auto",
                }}
              >
                <Chip label="NEW" color="warning" />
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Avatar
                    alt="Doctor"
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    sx={{ width: 80, height: 80 }}
                  />
                </Box>
                <Typography variant="h6" textAlign="center" mt={2}>
                  ElderGuard-AI Device
                </Typography>
                <Typography variant="body2" textAlign="center" color="text.secondary">
                  24/7 AI Emergency Response Coach
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {[
                    "AI-Powered Emergency Detection",
                    "Real-time Health Monitoring",
                    "Family Notification System",
                  ].map((text, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <CheckCircleIcon fontSize="small" color="success" sx={{ mr: 1 }} />
                      <Typography variant="body2">{text}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid> */}
          </Grid>

        </Container>
     
      </Box>

         {/* Pricing Section */}
         <Box sx={{ py: 0, textAlign: "center", backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" fontWeight="bold" >
          Early Access Special Offer
        </Typography>
        <Typography variant="body1" gutterBottom>
          Join our early users and get lifetime benefits
        </Typography>
        <PricingTable></PricingTable>
       
      </Box>

      {/* Feature Icons Section */}
      <Box sx={{ py: 3 }}>
        <Container>
          <Typography variant="h5" textAlign="center" fontWeight="bold" gutterBottom>
            Why ElderGuard-AI is Different
          </Typography>
          <Grid container spacing={3} mt={3}>
            {[
              {
                title: "24/7 Protection",
                desc: "Always-on emergency monitoring and instant response coaching",
                icon: <ShieldIcon fontSize="large" />,
              },
             
              {
                title: "Family Connect",
                desc: "Seamless integration with family members and caregivers",
                icon: <FamilyRestroomIcon fontSize="large" />,
              },
              {
                title: "Instant Response",
                desc: "Real-time coaching and emergency services coordination",
                icon: <StarIcon fontSize="large" />,
              },
            ].map((feature, index) => (
              <Grid item xs={4}  key={index}>
                <Paper sx={{ p: 6, textAlign: "center", borderRadius: 3 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
