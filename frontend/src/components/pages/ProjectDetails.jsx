import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Container,
  IconButton,
  Paper,
  Divider,
  Dialog,
  DialogContent,
  MobileStepper,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Code,
  Language,
  GitHub,
  ArrowBack,
  Storage,
  Security,
  ShoppingCart,
  Payment,
  NavigateNext,
  NavigateBefore,
  PlayArrow,
} from "@mui/icons-material";

import ecom1 from "../images/ecom1.png";
import ecom2 from "../images/ecom2.png";
import ecom3 from "../images/ecom3.png";
import ecom4 from "../images/ecom4.png";
import ecom5 from "../images/ecom5.png";
import ecom6 from "../images/ecom6.png";
import ecom7 from "../images/ecom7.png";
import ecom8 from "../images/ecom8.png";
import ecom9 from "../images/ecom9.png";
import ecom10 from "../images/ecom10.png";
import ecom11 from "../images/ecom11.png";
import ecom12 from "../images/ecom12.png";
import ecom13 from "../images/ecom13.png";
import ecom14 from "../images/ecom14.png";
import ecom15 from "../images/ecom15.png";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(false);

  const projectImages = [
    ecom1,
    ecom2,
    ecom3,
    ecom4,
    ecom5,
    ecom6,
    ecom7,
    ecom8,
    ecom9,
    ecom10,
    ecom11,
    ecom12,
    ecom13,
    ecom14,
    ecom15,
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  const handleVideoOpen = () => {
    setVideoOpen(true);
  };

  const handleVideoClose = () => {
    setVideoOpen(false);
  };

  const handleImageClick = () => {
    setFullscreenImage(true);
  };

  const handleFullscreenClose = () => {
    setFullscreenImage(false);
  };

  useEffect(() => {
    if (id === "ecommerce") {
      setProject({
        title: "Ecommerce Website",
        description:
          "A full-featured ecommerce web application offering a seamless shopping experience. The app includes essential ecommerce features like user authentication, product filtering, shopping cart, secure checkout, and real-time order management.",
        technologies: [
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
            title: "User Authentication",
            description:
              "JWT-based login/signup with separate user/admin dashboards",
            icon: <Security />,
          },
          {
            title: "Product Management",
            description:
              "Admin dashboard for managing products, categories, and orders",
            icon: <ShoppingCart />,
          },
          {
            title: "Shopping Cart",
            description:
              "Real-time cart management with local storage persistence",
            icon: <Storage />,
          },
          {
            title: "Payment Integration",
            description: "Secure payment processing with PayPal REST API",
            icon: <Payment />,
          },
        ],
        role: "Full Stack Developer",
        type: "Personal Project / Portfolio",
        learnings: [
          "Gained hands-on experience with real-time payment gateways",
          "Understood full-stack architecture and state management in React",
          "Strengthened backend development with Express, routing, and secure APIs",
          "Built scalable and reusable components with Tailwind CSS",
        ],
        githubUrl: "https://github.com/Prafulla-gaikawad/EcommerceNew",
        demoUrl: "https://your-ecommerce-demo.com",
      });
    }
  }, [id]);

  if (!project) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgba(63,81,181,0.05) 0%, rgba(245,0,87,0.05) 100%)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ mb: 4 }}>
            <Button
              startIcon={<ArrowBack />}
              component={Link}
              to="/projects"
              sx={{ mb: 2 }}
            >
              Back to Projects
            </Button>
            <Typography
              variant="h2"
              sx={{
                color: "primary.main",
                mb: 2,
                fontWeight: 700,
                background: "linear-gradient(45deg, #3f51b5, #f50057)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              {project.title}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 400,
                    width: "100%",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={handleImageClick}
                >
                  <img
                    src={projectImages[currentImageIndex]}
                    alt={`Project Screenshot ${currentImageIndex + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      backgroundColor: "#f5f5f5",
                    }}
                  />
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    sx={{
                      position: "absolute",
                      left: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      bgcolor: "rgba(255,255,255,0.9)",
                      "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                    }}
                  >
                    <NavigateBefore />
                  </IconButton>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      bgcolor: "rgba(255,255,255,0.9)",
                      "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                    }}
                  >
                    <NavigateNext />
                  </IconButton>
                </Box>
                <MobileStepper
                  steps={projectImages.length}
                  position="static"
                  activeStep={currentImageIndex}
                  sx={{
                    background: "transparent",
                    padding: 2,
                  }}
                  nextButton={
                    <Button size="small" onClick={handleNextImage}>
                      Next
                      <NavigateNext />
                    </Button>
                  }
                  backButton={
                    <Button size="small" onClick={handlePrevImage}>
                      <NavigateBefore />
                      Back
                    </Button>
                  }
                />
              </Paper>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Project Overview
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 3, color: "text.secondary" }}
                >
                  {project.description}
                </Typography>

                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Key Features
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                  {project.features.map((feature, index) => (
                    <Typography component="li" sx={{ mb: 1 }} key={index}>
                      {feature.description}
                    </Typography>
                  ))}
                </Box>

                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Technical Implementation
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 3, color: "text.secondary" }}
                >
                  The project was built using React with Vite for the frontend,
                  Node.js and Express for the backend, and MongoDB for the
                  database. Redux was used for state management, and the PayPal
                  REST API was integrated for secure payment processing.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  position: "sticky",
                  top: 20,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Project Details
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary" }}
                  >
                    Role
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {project.role}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary" }}
                  >
                    Technologies
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    {project.technologies.map((tech) => (
                      <Paper
                        key={tech}
                        sx={{
                          px: 1,
                          py: 0.5,
                          bgcolor: "background.default",
                          fontSize: "0.75rem",
                        }}
                      >
                        {tech}
                      </Paper>
                    ))}
                  </Box>

                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary" }}
                  >
                    Project Type
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {project.type}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<GitHub />}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: "linear-gradient(45deg, #3f51b5, #f50057)",
                      "&:hover": {
                        background: "linear-gradient(45deg, #303f9f, #c51162)",
                      },
                    }}
                  >
                    View on GitHub
                  </Button>

                  <Button
                    variant="outlined"
                    startIcon={<PlayArrow />}
                    onClick={handleVideoOpen}
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                      "&:hover": {
                        borderColor: "primary.dark",
                        backgroundColor: "rgba(63, 81, 181, 0.05)",
                      },
                    }}
                  >
                    Watch Project Demo
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Dialog
        open={videoOpen}
        onClose={handleVideoClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <iframe
            width="100%"
            height="500"
            src="https://drive.google.com/file/d/1ahGbxWt_sGlP4HQ1mum9hFAYfbHRt-B3/preview"
            title="Project Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>

      <Dialog
        open={fullscreenImage}
        onClose={handleFullscreenClose}
        maxWidth="xl"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <img
            src={projectImages[currentImageIndex]}
            alt={`Project Screenshot ${currentImageIndex + 1}`}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.9)",
              "&:hover": { bgcolor: "rgba(255,255,255,1)" },
            }}
          >
            <NavigateBefore />
          </IconButton>
          <IconButton
            onClick={handleNextImage}
            sx={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.9)",
              "&:hover": { bgcolor: "rgba(255,255,255,1)" },
            }}
          >
            <NavigateNext />
          </IconButton>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProjectDetails;
