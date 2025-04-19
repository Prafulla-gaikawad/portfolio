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
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
        overflow: "hidden",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
        borderRadius: "32px",
        margin: "16px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          animation: "pulse 8s infinite",
          borderRadius: "32px",
          "@keyframes pulse": {
            "0%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.2)" },
            "100%": { transform: "scale(1)" },
          },
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: "center",
              fontWeight: 700,
              background: "linear-gradient(45deg, #00ff88, #00b4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 10px rgba(0,255,136,0.3)",
            }}
          >
            Let's Connect
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {contactItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0, 0, 0, 0.2)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "24px",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(45deg, ${item.color}33, transparent)`,
                        opacity: 0.3,
                        transition: "all 0.3s ease",
                        borderRadius: "24px",
                      },
                      "&:hover": {
                        background: "rgba(0, 0, 0, 0.3)",
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                        "&::before": {
                          opacity: 0.5,
                        },
                      },
                    }}
                  >
                    <IconButton
                      onClick={item.action}
                      sx={{
                        color: item.color,
                        mb: 2,
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "16px",
                        "&:hover": {
                          transform: "scale(1.1)",
                          background: "rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        mb: 1,
                        fontWeight: "bold",
                        textAlign: "center",
                        textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        textAlign: "center",
                        wordBreak: "break-word",
                        textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
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
