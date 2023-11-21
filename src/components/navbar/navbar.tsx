import React from "react";
import logo from "../../assets/images/NetsmartzLogo.png";
import { AppBar, IconButton, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: 0 }}>
      <Toolbar sx={{ backgroundColor: "#f58220" }}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <img src={logo} alt="logo" loading="lazy" height={40} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
