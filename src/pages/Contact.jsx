// Contact Page
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Alert
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to backend or email service if needed
    console.log("Submitted form:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box sx={{ padding: "3rem", maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ marginBottom: "2rem" }}
      >
        Have a question, partnership inquiry, or feedback? Reach out and we'll get back to you as soon as possible.
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Thank you! We'll be in touch shortly.
        </Alert>
      )}

      <Paper elevation={3} sx={{ padding: "2rem" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="name"
                label="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
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
              />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button type="submit" variant="contained" color="primary" size="large">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
