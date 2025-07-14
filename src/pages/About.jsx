// About Page
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ padding: "3rem" }}>
      <Typography variant="h3" align="center" gutterBottom>
        About ElderGuard AI
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ maxWidth: "800px", margin: "auto", marginBottom: "3rem" }}
      >
        ElderGuard AI was born from a mission to protect and empower our aging
        population using intelligent technology. With cutting-edge fall detection,
        alert systems, and caregiver integrations, we are redefining safety and
        peace of mind for families and care facilities.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {[
          {
            title: "Mission",
            desc: "To ensure seniors live independently and safely by providing real-time AI monitoring."
          },
          {
            title: "Vision",
            desc: "To become the global standard for elderly safety using ethical, scalable, and intelligent solutions."
          },
          {
            title: "Values",
            desc: "We believe in empathy, innovation, data privacy, and putting people over profits."
          }
        ].map((card, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper elevation={3} sx={{ padding: "2rem", height: "100%" }}>
              <Typography variant="h6" gutterBottom>{card.title}</Typography>
              <Typography color="text.secondary">{card.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", marginTop: "5rem" }}>
        <Typography variant="h5" gutterBottom>
          Why We Built This
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "700px", margin: "auto" }}
        >
          More than 36 million falls are reported among older adults each year. Most happen at home, often without witnesses.
          We created ElderGuard to bring real-time protection, alerts, and assurance to families and care providers alike —
          using AI for good.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
