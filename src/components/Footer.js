import React from "react";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

const Footer = () => {
  const programs = [
    "Data Science & AI",
    "Product Management",
    "Business Analytics",
    "Digital Transformation",
    "Business Management",
  ];

  return (
    <div className="footer">
      <Container className="footer-container">
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Typography variant="h6" className="footer-title">
              About Us
            </Typography>
            <Typography variant="body1" className="footer-about">
              Speak with our Learning Advisor
              <br />
              Email us (For Data Science Queries): admissions@accredian.com
              <br />
              Email us (For Product Management Queries): pm@accredian.com
              <br />
              Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)
              <br />
              Product Management Admission Helpline: +91 9625811095
              <br />
              Enrolled Student Helpline: +91 7969322507
              <br />
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
              <br />
            </Typography>
            <div className="footer-icons">
              <IconButton
                color="inherit"
                aria-label="LinkedIn"
                href="https://www.linkedin.com"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Twitter"
                href="https://www.twitter.com"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Facebook"
                href="https://www.facebook.com"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                href="https://www.instagram.com"
              >
                <InstagramIcon />
              </IconButton>
            </div>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h6" className="footer-title">
              Follow Us
            </Typography>
            <Typography variant="body2" className="footer-follow">
              Schedule 1-on-1 Call Now
              <br />
              Contact Us
              <br />
              Career
              <br />
              Blog
              <br />
              Admission Policy
              <br />
              Referral Policy
              <br />
              Privacy Policy
              <br />
              Terms Of Service
              <br />
              Why Accredian
              <br />
              Master FAQs
              <br />© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
              Rights Reserved
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" className="footer-title">
              Programs
            </Typography>
            <List className="footer-program-list">
              {programs.map((program, index) => (
                <ListItem key={index} className="footer-list-item">
                  <ListItemText primary={program} />
                  <br></br>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
