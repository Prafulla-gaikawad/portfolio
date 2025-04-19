import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Divider,
  useTheme,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  Language as LanguageIcon,
  ShoppingCart as ShoppingCartIcon,
  Code as CodeIcon,
  Storage as StorageIcon,
  Payment as PaymentIcon,
  Security as SecurityIcon,
  Dashboard as DashboardIcon,
  FilterList as FilterIcon,
  Speed as SpeedIcon,
} from "@mui/icons-material";
import ecommerceNew from "../images/ecom.png";
import ecommerce from "../images/ecommerce.png";
import gofood from "../images/gofood.png";
import weather from "../images/weather.png";
import referral from "../images/referral.png";
import location from "../images/location.png";
import events from "../images/events.png";
import { Link as RouterLink } from "react-router-dom";

const Projects = () => {
  const theme = useTheme();

  const projects = [
    {
      title: "Ecommerce Website",
      description:
        "A full-featured ecommerce web application offering a seamless shopping experience. The app includes essential ecommerce features like user authentication, product filtering, shopping cart, secure checkout, and real-time order management.",
      image: ecommerceNew,
      github: "https://github.com/Prafulla-gaikawad/EcommerceNew",
      live: "https://your-ecommerce-site.com",
      tech: [
        "React (Vite)",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PayPal API",
        "Redux",
        "JWT",
      ],
      features: [
        {
          icon: <PaymentIcon />,
          title: "PayPal Integration",
          description: "Secure payment processing with PayPal REST API",
        },
        {
          icon: <SecurityIcon />,
          title: "User Authentication",
          description:
            "JWT-based login/signup with separate user/admin dashboards",
        },
        {
          icon: <ShoppingCartIcon />,
          title: "Shopping Cart",
          description:
            "Persistent cart with quantity adjustment and live price calculation",
        },
        {
          icon: <DashboardIcon />,
          title: "Order Management",
          description: "Real-time order tracking and status updates",
        },
      ],
      role: "Full Stack Developer",
      type: "Personal Project / Portfolio",
    },
    {
      title: "GoFood",
      description:
        "A food delivery application built with MERN stack, featuring user authentication, restaurant listings, and order management.",
      image: gofood,
      github:
        "https://github.com/Prafulla-gaikawad/Food-Order-APP-Using-MERN-Stack",
      live: "https://thunderous-bublanina-d574f5.netlify.app",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        {
          icon: <CodeIcon />,
          title: "User Authentication",
          description: "Secure login and registration system",
        },
        {
          icon: <ShoppingCartIcon />,
          title: "Restaurant Listings",
          description: "Browse and search for restaurants",
        },
        {
          icon: <DashboardIcon />,
          title: "Order Management",
          description: "Track and manage food orders",
        },
      ],
    },
    {
      title: "Referral Platform",
      description:
        "A platform for managing and tracking referrals, built with modern web technologies.",
      image: referral,
      github: "https://github.com/Prafulla-gaikawad/referal-platform",
      live: "https://helpful-cajeta-f1a22b.netlify.app",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        {
          icon: <CodeIcon />,
          title: "Referral Tracking",
          description: "Track and manage referral processes",
        },
        {
          icon: <StorageIcon />,
          title: "Data Management",
          description: "Store and retrieve referral data efficiently",
        },
        {
          icon: <DashboardIcon />,
          title: "Analytics Dashboard",
          description: "View referral statistics and performance metrics",
        },
      ],
    },
    {
      title: "Simple Clothing Shopping Website",
      description:
        "A clean and responsive clothing shopping website using React where users can browse clothing items categorized under Men, Women, and Children, add items to their cart, and complete the checkout process. Designed for a smooth and intuitive user experience with essential ecommerce functionalities.",
      image: ecommerce,
      github: "https://github.com/Prafulla-gaikawad/E-Commerce",
      live: "https://prafulla-gaikawad.github.io/E-Commerce/",
      tech: ["React.js", "CSS", "React Router", "Context API"],
      features: [
        {
          icon: <FilterIcon />,
          title: "Category-based Browsing",
          description:
            "Browse clothing items organized into Men, Women, and Children categories",
        },
        {
          icon: <ShoppingCartIcon />,
          title: "Add to Cart Functionality",
          description:
            "Add multiple items with quantity selection and real-time cart updates",
        },
        {
          icon: <PaymentIcon />,
          title: "Simple Checkout Page",
          description:
            "Cart summary with items, quantity, and total calculation",
        },
      ],
    },
    {
      title: "Location Tracking & Profile Management System",
      description:
        "A sophisticated location-based profile management system built with React, featuring interactive maps, geocoding capabilities, and comprehensive profile management. The application allows administrators to create, manage, and track user profiles with their geographical locations, providing a seamless experience for location-based data visualization.",
      image: location,
      github: "https://github.com/Prafulla-gaikawad/ProfileManager",
      live: "https://stirring-cranachan-4c6f00.netlify.app",
      tech: [
        "React.js",
        "Leaflet.js",
        "OpenStreetMap API",
        "OpenCage API",
        "CSS3",
        "React Hooks",
      ],
      features: [
        {
          icon: <DashboardIcon />,
          title: "Interactive Map Integration",
          description:
            "Real-time location visualization with custom markers and dynamic updates",
        },
        {
          icon: <SecurityIcon />,
          title: "Profile Management System",
          description:
            "Create and manage user profiles with detailed information and photo uploads",
        },
        {
          icon: <StorageIcon />,
          title: "Advanced Geocoding",
          description:
            "Dual geocoding service implementation with automatic address validation",
        },
      ],
    },
    {
      title: "Employee Management System",
      description:
        "A comprehensive employee management solution built with React and Node.js, featuring robust employee data management, authentication, and administrative controls. The application provides a seamless experience for managing employee information, tracking attendance, and maintaining organizational data.",
      image: events,
      github: "https://github.com/Prafulla-gaikawad/employee-management",
      live: "https://your-employee-management-site.com",
      tech: [
        "React.js",
        "Vite",
        "CSS3",
        "React Hooks",
        "Node.js",
        "Express.js",
        "MySQL",
        "JWT Authentication",
      ],
      features: [
        {
          icon: <SecurityIcon />,
          title: "Employee Management",
          description:
            "Create, update, and delete employee profiles with comprehensive information storage",
        },
        {
          icon: <SecurityIcon />,
          title: "Authentication System",
          description:
            "Secure user authentication with role-based access control and JWT token management",
        },
        {
          icon: <DashboardIcon />,
          title: "Administrative Dashboard",
          description:
            "Intuitive admin interface with employee data visualization and search capabilities",
        },
      ],
    },
    {
      title: "Weather App",
      description:
        "A weather application that provides real-time weather information for any location. Features include current weather, forecasts, and location-based weather data.",
      image: weather,
      github: "https://github.com/Prafulla-gaikawad/weather_app",
      live: "https://prafulla-gaikawad.github.io/weather_app/",
      tech: ["React", "OpenWeather API", "Axios", "CSS Modules"],
      features: [
        {
          icon: <CodeIcon />,
          title: "Real-time Data",
          description: "Live weather updates from OpenWeather API",
        },
        {
          icon: <SpeedIcon />,
          title: "Location Search",
          description: "Search for weather by city name or coordinates",
        },
        {
          icon: <DashboardIcon />,
          title: "Forecast Display",
          description: "5-day weather forecast with detailed information",
        },
      ],
    },
  ];

  return (
    <Box sx={{ py: 8, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "primary.main",
              mb: 6,
              textAlign: "center",
              fontWeight: 700,
              background: "linear-gradient(45deg, #3f51b5, #f50057)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            My Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                      },
                      position: "relative",
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "5px",
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      },
                    }}
                  >
                    <Grid container direction="column">
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            position: "relative",
                            height: 400,
                            width: "100%",
                            overflow: "hidden",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              width: "100%",
                              height: "30%",
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                              pointerEvents: "none",
                            },
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={project.image}
                            alt={project.title}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.5s ease",
                              "&:hover": {
                                transform: "scale(1.05)",
                              },
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 20,
                              left: 20,
                              right: 20,
                              zIndex: 1,
                            }}
                          >
                            <Typography
                              variant="h4"
                              sx={{
                                color: "white",
                                fontWeight: 700,
                                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                              }}
                            >
                              {project.title}
                            </Typography>
                            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                              <Chip
                                label={project.role || "Developer"}
                                size="small"
                                sx={{
                                  bgcolor: "rgba(255,255,255,0.9)",
                                  color: "primary.main",
                                  fontWeight: 500,
                                }}
                              />
                              <Chip
                                label={project.type || "Personal Project"}
                                size="small"
                                sx={{
                                  bgcolor: "rgba(255,255,255,0.9)",
                                  color: "secondary.main",
                                  fontWeight: 500,
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <CardContent sx={{ p: 4 }}>
                          <Typography
                            variant="body1"
                            sx={{ mb: 3, color: "text.secondary" }}
                          >
                            {project.description}
                          </Typography>

                          <Box sx={{ mb: 3 }}>
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 600, mb: 1 }}
                            >
                              Tech Stack:
                            </Typography>
                            <Box
                              sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
                            >
                              {project.tech.map((tech, idx) => (
                                <Chip
                                  key={idx}
                                  label={tech}
                                  size="small"
                                  sx={{
                                    bgcolor: "background.default",
                                    border: "1px solid",
                                    borderColor: "divider",
                                    fontWeight: 500,
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>

                          {project.features && (
                            <Box sx={{ mb: 3 }}>
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600, mb: 1 }}
                              >
                                Key Features:
                              </Typography>
                              <Grid container spacing={2}>
                                {project.features.map((feature, idx) => (
                                  <Grid item xs={12} sm={6} key={idx}>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        p: 1,
                                        borderRadius: 1,
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                          bgcolor: "action.hover",
                                        },
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          color: "primary.main",
                                          mr: 1,
                                          mt: 0.5,
                                        }}
                                      >
                                        {feature.icon}
                                      </Box>
                                      <Box>
                                        <Typography
                                          variant="subtitle2"
                                          sx={{ fontWeight: 600 }}
                                        >
                                          {feature.title}
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          sx={{ color: "text.secondary" }}
                                        >
                                          {feature.description}
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Grid>
                                ))}
                              </Grid>
                            </Box>
                          )}

                          {project.learnings && (
                            <Box sx={{ mb: 3 }}>
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600, mb: 1 }}
                              >
                                Learnings & Highlights:
                              </Typography>
                              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                {project.learnings.map((learning, idx) => (
                                  <Typography
                                    component="li"
                                    key={idx}
                                    variant="body2"
                                    sx={{
                                      color: "text.secondary",
                                      mb: 0.5,
                                      "&:before": {
                                        content: '"•"',
                                        color: "primary.main",
                                        fontWeight: "bold",
                                        display: "inline-block",
                                        width: "1em",
                                        ml: -1,
                                      },
                                    }}
                                  >
                                    {learning}
                                  </Typography>
                                ))}
                              </Box>
                            </Box>
                          )}

                          <Divider sx={{ my: 2 }} />

                          <CardActions
                            sx={{ justifyContent: "flex-end", pt: 1 }}
                          >
                            {project.title === "Ecommerce Website" && (
                              <Button
                                variant="outlined"
                                component={RouterLink}
                                to="/project/ecommerce"
                                sx={{
                                  mr: 1,
                                  borderRadius: 2,
                                  px: 3,
                                  py: 1,
                                  borderColor: "primary.main",
                                  color: "primary.main",
                                  "&:hover": {
                                    borderColor: "primary.dark",
                                    backgroundColor: "rgba(63, 81, 181, 0.05)",
                                  },
                                }}
                              >
                                View Details
                              </Button>
                            )}
                            <Button
                              variant="outlined"
                              startIcon={<GitHubIcon />}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                mr: 1,
                                borderRadius: 2,
                                px: 3,
                                py: 1,
                                borderColor: "primary.main",
                                color: "primary.main",
                                "&:hover": {
                                  borderColor: "primary.dark",
                                  backgroundColor: "rgba(63, 81, 181, 0.05)",
                                },
                              }}
                            >
                              GitHub
                            </Button>
                            {project.live &&
                              !project.live.includes("your-") && (
                                <Button
                                  variant="contained"
                                  startIcon={<LanguageIcon />}
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  sx={{
                                    borderRadius: 2,
                                    px: 3,
                                    py: 1,
                                    background:
                                      "linear-gradient(45deg, #3f51b5, #f50057)",
                                    "&:hover": {
                                      background:
                                        "linear-gradient(45deg, #303f9f, #c51162)",
                                    },
                                  }}
                                >
                                  Live Demo
                                </Button>
                              )}
                          </CardActions>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
