import React, { useState } from "react";
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

import Slider from "react-slick";
import ShieldIcon from "@mui/icons-material/Shield";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import AssistantIcon from "@mui/icons-material/Assistant";
import EarlyAccessModal from "../components/EarlyAccessModal";
import bgImage from "../istockphoto-688224280-1024x1024.jpg";
import slide1 from '../Images/slide1.jpg';
import slide2 from '../Images/slide2.jpg';
import slide3 from '../Images/slide3.jpg';
import slide4 from '../Images/slide4.jpg';
import slide5 from '../Images/slide5.jpg';

const sliderImages = [
  {
    url: slide1, // or use public URL
    title: "AI Emergency Detection",
    subtitle: "Real-time monitoring and voice-based response guidance",
    cta: "Get Started",
  },
  {
    url: slide2,
    title: "Protect Your Loved Ones",
    subtitle: "Install ElderGuard in homes and care facilities",
    cta: "Learn More",
  },
  {
    url: slide3,
    title: "Smart & Scalable",
    subtitle: "ElderGuard grows with your family’s needs",
    cta: "See Plans",
  },
  {
    url: slide4,
    title: "Smart & Scalable",
    subtitle: "ElderGuard grows with your family’s needs",
    cta: "See Plans",
  },
  {
    url: slide5,
    title: "Smart & Scalable",
    subtitle: "ElderGuard grows with your family’s needs",
    cta: "See Plans",
  },
];

const heroSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
};



const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Box sx={{paddingTop:8}}>
    
      {/* Hero Section */}

      <Slider {...heroSettings}>
  {sliderImages.map((slide, index) => (
    <Box
      key={index}
      sx={{
        height: "100vh",
        backgroundImage: `url(${slide.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        textAlign: "center",
        
      }}
    >
        
      
        <Container >
          <Grid container  alignItems="center">
            {/* Left: Text */}
            <Grid item  sx={{margin:20}} >
             
              <Typography variant="h3" fontWeight="bold" >
                The World's Most Advanced <span style={{ color: "#1976d2" }}>AI Emergency Response</span> System
              </Typography>
              <Typography variant="body1">
                Revolutionary AI-powered emergency response coaching for seniors. Providing intelligent,
                real-time assistance when it matters most.
              </Typography>
              <Box  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
  }}>
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
  ))}
</Slider>

<Box sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        💥 Limited Time Early Access
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Get lifetime access to all features and devices for just $39.99.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
        🎁 Claim Early Access
      </Button>

      <EarlyAccessModal open={openModal} onClose={() => setOpenModal(false)} />
    </Box>

{/* 🚀 Feature Icons Section */}
<Box sx={{ py: 10, backgroundColor: "#fff" }}>
  <Container>
    <Typography
      variant="h4"
      textAlign="center"
      fontWeight="bold"
      gutterBottom
    >
      Why ElderGuard-AI is Different
    </Typography>
    <Typography
      variant="body1"
      textAlign="center"
      color="text.secondary"
      sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
    >
      ElderGuard-AI isn’t just smart — it's human-centered, secure, and built for families.
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {[
        {
          title: "24/7 Protection",
          desc: "Always-on emergency monitoring and instant response coaching.",
          icon: <ShieldIcon fontSize="large" color="primary" />,
        },
        {
          title: "Family Connect",
          desc: "Seamless integration with family members and caregivers.",
          icon: <FamilyRestroomIcon fontSize="large" color="secondary" />,
        },
        {
          title: "Instant Response",
          desc: "Real-time coaching and emergency services coordination.",
          icon: <StarIcon fontSize="large" sx={{ color: "#ffa000" }} />,
        },
      ].map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            elevation={4}
            sx={{
              p: 5,
              textAlign: "center",
              borderRadius: 4,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            <Box sx={{ mb: 2 }}>{feature.icon}</Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
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
