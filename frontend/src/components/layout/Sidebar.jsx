import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Code as CodeIcon,
  Email as EmailIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "About", icon: <PersonIcon />, path: "/about" },
    { text: "Projects", icon: <CodeIcon />, path: "/projects" },
    { text: "Contact", icon: <EmailIcon />, path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(135deg, rgba(63, 81, 181, 0.05) 0%, rgba(245, 0, 87, 0.05) 100%)",
        backdropFilter: "blur(10px)",
        borderRight: "1px solid rgba(63, 81, 181, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            background: "linear-gradient(45deg, #3f51b5, #f50057)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Portfolio
        </Typography>
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} color="primary">
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          mb: 3,
        }}
      >
        <Avatar
          sx={{
            width: 120,
            height: 120,
            fontSize: "3rem",
            bgcolor: theme.palette.primary.main,
            border: `4px solid ${theme.palette.primary.light}`,
            mb: 3,
          }}
        >
          PG
        </Avatar>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, textAlign: "center", mb: 1 }}
        >
          Prafulla Gaikwad
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", textAlign: "center" }}
        >
          Full Stack Developer
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => {
              navigate(item.path);
              if (isMobile) setMobileOpen(false);
            }}
            sx={{
              mb: 2,
              borderRadius: 2,
              mx: 2,
              py: 1.5,
              backgroundColor:
                location.pathname === item.path
                  ? "rgba(63, 81, 181, 0.1)"
                  : "transparent",
              color:
                location.pathname === item.path
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
              "&:hover": {
                backgroundColor: "rgba(63, 81, 181, 0.05)",
                transform: "translateX(5px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color:
                  location.pathname === item.path
                    ? theme.palette.primary.main
                    : theme.palette.text.secondary,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  fontSize: "1.1rem",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1200,
            bgcolor: "background.paper",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            "&:hover": {
              bgcolor: "background.paper",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Box component="nav" sx={{ width: { sm: 300 }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
              border: "none",
              boxShadow: "0 0 20px rgba(0,0,0,0.05)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
