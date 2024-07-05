import React from "react";
import { Button, Container, Typography } from "@mui/material";
import "./HeroSection.css"; // Import the CSS file

const HeroSection = ({ onReferNowClick }) => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <Typography variant="h2" gutterBottom>
          Refer & Earn
        </Typography>
        <Typography variant="h5" gutterBottom>
          Refer a friend to our course and earn rewards!
        </Typography>
        <Button variant="contained" color="primary" onClick={onReferNowClick}>
          Refer Now
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
