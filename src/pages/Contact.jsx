import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Alert,
  Container,
  useTheme,
  Slide,
} from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Auto-hide alert after 4s
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (

  <Box>
    <Box sx={{
      textAlign: "center",
      mb: 6,
      background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      color: "#fff",
      py: 6,
      px: 2,
      borderRadius: 3,
    }}>
      <Container maxWidth="md">
        {/* Header Section */}
        <Box >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Questions, feedback, or partnership inquiries? We’d love to hear from you.
          </Typography>
        </Box>
        </Container>
      </Box>
      
      <Container maxWidth="md">
      {/* Success Alert */}
      <Slide in={submitted} direction="down" mountOnEnter unmountOnExit>
          <Alert severity="success" sx={{ mb: 4 }}>
            ✅ Thank you! We'll be in touch shortly.
          </Alert>
        </Slide>

        {/* Contact Form */}
        <Paper
          elevation={2}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "#fff",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="name"
                  label="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="email"
                  label="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  label="Your Message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 5,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  📩 Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
        </Container>
       
     
    </Box>
  );
};

export default Contact;
