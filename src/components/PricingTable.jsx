import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
  "24/7 AI Emergency Coach",
  "Free Smart Cameras",
  "Lifetime Updates",
  "Lifetime Support"]
  

const EarlyAccessCard = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 360,
        mx: "auto",
        p: 3,
        borderRadius: 3,
        backgroundColor: "#fff",
        textAlign: "center"
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        ElderGuard-AI Complete
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2e7d32", my: 1 }}>
        $39.99
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        One-time payment · Lifetime access
      </Typography>

      <List dense sx={{ mt: 2, mb: 2 }}>
        {benefits.map((text, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <CheckCircleIcon fontSize="small" color="success" />
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{ fontSize: "0.9rem" }}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Comparable plans: $600/year
        <br />
        <strong style={{ color: "#1976d2" }}>You save $560+</strong>
      </Typography>

      <Button variant="contained" fullWidth sx={{ fontWeight: 600 }}>
        Claim for $39.99
      </Button>

      <Typography variant="caption" display="block" sx={{ mt: 1, color: "#888" }}>
        30-day money-back guarantee
      </Typography>
    </Paper>
  );
};

export default EarlyAccessCard;
