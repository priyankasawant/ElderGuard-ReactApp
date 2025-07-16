import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  useTheme,
} from "@mui/material";
import { EmojiObjects, Favorite, Visibility } from "@mui/icons-material";

const About = () => {
  const theme = useTheme();

  const featureCards = [
    {
      title: "Mission",
      desc: "To ensure seniors live independently and safely by providing real-time AI monitoring.",
      icon: <Favorite color="error" sx={{ fontSize: 40 }} />,
    },
    {
      title: "Vision",
      desc: "To become the global standard for elderly safety using ethical, scalable, and intelligent solutions.",
      icon: <Visibility color="primary" sx={{ fontSize: 40 }} />,
    },
    {
      title: "Values",
      desc: "We believe in empathy, innovation, data privacy, and putting people over profits.",
      icon: <EmojiObjects color="secondary" sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: "#fff",
          py: 8,
          
          textAlign: "center",
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          About ElderGuard AI
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: "800px",
            margin: "auto",
            opacity: 0.9,
          }}
        >
          ElderGuard AI was born from a mission to protect and empower our aging
          population using intelligent technology.
        </Typography>
      </Box>

      {/* Core Values Section */}
      <Container sx={{ py: 3 }}>
        <Grid container spacing={4} justifyContent="center">
          {featureCards.map((card, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper
                elevation={4}
                sx={{
                  padding: 4,
                  textAlign: "center",
                  height: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{card.icon}</Box>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {card.title}
                </Typography>
                <Typography color="text.secondary">{card.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Impact Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 8, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Why We Built This
          </Typography>
          <Typography variant="body1" color="text.secondary">
            More than 36 million falls are reported among older adults each year.
            Most happen at home, often without witnesses.
            We created ElderGuard to bring real-time protection, alerts, and
            assurance to families and care providers alike — using AI for good.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
