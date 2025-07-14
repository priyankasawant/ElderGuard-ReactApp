import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

const Investors = () => {
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
    <Box sx={{ padding: "3rem" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Investor Opportunity
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ maxWidth: "800px", margin: "auto", marginBottom: "3rem" }}
      >
        The global elder care market is expected to exceed $1.7 trillion by 2027.
        ElderGuard AI provides a unique opportunity to invest in scalable,
        AI-powered healthcare solutions designed for families, caregivers,
        and large care facilities.
      </Typography>

      <Typography variant="h5" align="center" gutterBottom>
        Early Supporters
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ marginBottom: "4rem" }}>
        {investorNames.map((name, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Paper
              elevation={2}
              sx={{
                padding: "1.5rem",
                textAlign: "center",
                fontWeight: 600,
                fontSize: "1.1rem"
              }}
            >
              {name}
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          backgroundColor: "#e3f2fd",
          textAlign: "center",
          borderRadius: "8px"
        }}
      >
        <Typography variant="h5" gutterBottom>
          Join as an Investor
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "700px", margin: "auto" }}>
          Investors will receive lifetime recognition on our platform, early access
          to features, and be part of shaping the future of elderly care with AI-driven
          monitoring. We’re accepting pre-seed interest now.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Investors;
