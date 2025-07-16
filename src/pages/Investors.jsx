import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  useTheme,
  Button,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Investors = () => {
  const theme = useTheme();

  const investorNames = [
    "Sequoia Capital",
    "SoftBank Ventures",
    "Andreessen Horowitz",
    "Greylock Partners",
    "Accel",
    "Lightspeed",
    "Khosla Ventures"
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: "#fff",
          py: 10,
          
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Investor Opportunity
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            The global elder care market is expected to exceed $1.7 trillion by 2027.
            ElderGuard AI is your chance to invest in scalable, AI-powered safety solutions.
          </Typography>
        </Container>
      </Box>

      {/* Early Supporters */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Early Supporters
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {investorNames.map((name, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper
                elevation={4}
                sx={{
                  py: 4,
                  px: 2,
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                {/* You can replace this with actual logos */}
                <Box sx={{ mb: 1 }}>
                  <TrendingUpIcon fontSize="large" color="primary" />
                </Box>
                {name}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call-to-Action */}
      <Box sx={{ backgroundColor: "#f9f9f9", py: 8 }}>
        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: "12px",
              backgroundColor: "#e8f5e9",
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Join as an Investor
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "700px", margin: "auto", mb: 3 }}
            >
              Receive lifetime recognition, early access to features, and help shape
              the future of elderly care with AI-driven monitoring. We’re currently
              accepting pre-seed interest.
            </Typography>
            <Button variant="contained" size="large" color="success">
              Express Interest
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Investors;
