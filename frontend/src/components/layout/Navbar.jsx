import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const drawer = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
        color: "white",
        pt: 4,
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.name}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              py: 2,
              "&:hover": {
                background: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                textAlign: "center",
                color: location.pathname === item.path ? "#00ff88" : "white",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
          height: "80px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            height: "100%",
            maxWidth: "1200px",
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #00ff88, #00b4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "2px",
              textShadow: "0 0 10px rgba(0, 255, 136, 0.3)",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            PRAFULLA
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: "#00ff88",
                "&:hover": {
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    color:
                      location.pathname === item.path ? "#00ff88" : "#ffffff",
                    position: "relative",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    textShadow:
                      location.pathname === item.path
                        ? "0 0 10px rgba(0, 255, 136, 0.3)"
                        : "none",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "3px",
                      bottom: -5,
                      left: 0,
                      background: "linear-gradient(45deg, #00ff88, #00b4ff)",
                      transform:
                        location.pathname === item.path
                          ? "scaleX(1)"
                          : "scaleX(0)",
                      transformOrigin: "bottom right",
                      transition: "transform 0.3s ease-out",
                    },
                    "&:hover": {
                      color: "#00ff88",
                      transform: "translateY(-2px)",
                      transition: "all 0.3s ease",
                      textShadow: "0 0 10px rgba(0, 255, 136, 0.3)",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                      transformOrigin: "bottom left",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            background: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(10px)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
