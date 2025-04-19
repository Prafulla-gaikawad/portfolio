import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  useTheme,
  Divider,
  Snackbar,
  Alert,
  IconButton,
  Link,
  Paper,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import axios from "axios";

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      if (response.data.message === "Email sent successfully") {
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });
        resetForm();
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Error sending message. Please try again.";

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:prafullasmailid@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919156128214";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919156128214", "_blank");
  };

  const contactItems = [
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: "Email",
      value: "prafullasmailid@gmail.com",
      action: handleEmailClick,
      color: "#EA4335",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: "Phone",
      value: "+91 91561 28214",
      action: handlePhoneClick,
      color: "#34A853",
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 40 }} />,
      title: "WhatsApp",
      value: "+91 91561 28214",
      action: handleWhatsAppClick,
      color: "#25D366",
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
      title: "LinkedIn",
      value: "linkedin.com/in/coderpraful",
      action: () =>
        window.open("https://www.linkedin.com/in/coderpraful/", "_blank"),
      color: "#0077B5",
    },
    {
      icon: <InstagramIcon sx={{ fontSize: 40 }} />,
      title: "Instagram",
      value: "@prafulla_gaikawad",
      action: () =>
        window.open("https://www.instagram.com/prafulla_gaikawad/", "_blank"),
      color: "#E4405F",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, rgba(63,81,181,0.05) 0%, rgba(245,0,87,0.05) 100%)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "240px", // Account for sidebar width
        paddingRight: "24px", // Balance the layout
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          overflow: "hidden",
          width: "100%",
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              borderRadius: "50%",
              background: `rgba(${Math.random() * 255}, ${
                Math.random() * 255
              }, ${Math.random() * 255}, 0.05)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </Box>

      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          py: 4,
          px: { xs: 2, sm: 4 },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1100px !important",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "primary.main",
              mb: 3,
              textAlign: "center",
              fontWeight: 700,
              background: "linear-gradient(45deg, #3f51b5, #f50057)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 10px rgba(0,0,0,0.1)",
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
              width: "100%",
            }}
          >
            Let's Connect
          </Typography>

          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 4,
              color: "text.secondary",
              width: "100%",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Feel free to reach out to me through any of these channels
          </Typography>

          <Grid
            container
            spacing={6}
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            {contactItems.slice(0, 3).map((item, index) => (
              <Grid item xs={12} sm={4} key={index} sx={{ display: "flex" }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: 4,
                      background: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                        background: "rgba(255, 255, 255, 1)",
                      },
                    }}
                  >
                    <IconButton
                      onClick={item.action}
                      sx={{
                        color: item.color,
                        mb: 2,
                        p: 2,
                        "&:hover": {
                          transform: "scale(1.1)",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: "text.primary",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Link
                      component="button"
                      onClick={item.action}
                      sx={{
                        color: "text.secondary",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        "&:hover": {
                          color: item.color,
                        },
                      }}
                    >
                      {item.value}
                    </Link>
                  </Paper>
                </motion.div>
              </Grid>
            ))}

            <Grid
              container
              item
              xs={12}
              spacing={6}
              sx={{
                justifyContent: "center",
                mt: 0, // Reset margin top since spacing handles it
              }}
            >
              {contactItems.slice(3).map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index + 3}
                  sx={{ display: "flex" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    style={{ width: "100%" }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        borderRadius: 4,
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                          background: "rgba(255, 255, 255, 1)",
                        },
                      }}
                    >
                      <IconButton
                        onClick={item.action}
                        sx={{
                          color: item.color,
                          mb: 2,
                          p: 2,
                          "&:hover": {
                            transform: "scale(1.1)",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          },
                        }}
                      >
                        {item.icon}
                      </IconButton>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "text.primary",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Link
                        component="button"
                        onClick={item.action}
                        sx={{
                          color: "text.secondary",
                          textDecoration: "none",
                          fontSize: "0.95rem",
                          fontWeight: 500,
                          "&:hover": {
                            color: item.color,
                          },
                        }}
                      >
                        {item.value}
                      </Link>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
