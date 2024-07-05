import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Refer & Earn
        </Typography>
        <Button color="inherit" onClick={() => scrollToSection("benefits")}>
          Benefits
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("faq")}>
          FAQ
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("support")}>
          Support
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
