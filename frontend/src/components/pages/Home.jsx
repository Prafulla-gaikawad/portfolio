import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import StyleIcon from "@mui/icons-material/Style";
import DataObjectIcon from "@mui/icons-material/DataObject";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
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

        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: "primary.main",
                    mb: 2,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    fontWeight: "bold",
                  }}
                >
                  Hi, I'm Prafulla Gaikwad
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: "text.primary",
                    mb: 4,
                    fontSize: { xs: "1.8rem", md: "2.5rem" },
                    fontWeight: "medium",
                  }}
                >
                  Full Stack Developer
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    maxWidth: "600px",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  I'm a passionate Full Stack Developer with experience in
                  building web applications using the MERN stack. I love
                  creating elegant solutions to complex problems.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      component={RouterLink}
                      to="/projects"
                      sx={{ px: 4, py: 1.5 }}
                    >
                      View My Work
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      component={RouterLink}
                      to="/contact"
                      sx={{ px: 4, py: 1.5 }}
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      href="https://drive.google.com/file/d/1xkecl_E7IKH6vppstRuMLvC3aEW1O2d_/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ px: 4, py: 1.5 }}
                    >
                      Resume
                    </Button>
                  </motion.div>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <motion.a
                    href="https://github.com/Prafulla-gaikawad"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <GitHubIcon sx={{ fontSize: 32, color: "text.primary" }} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/coderpraful/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <LinkedInIcon
                      sx={{ fontSize: 32, color: "text.primary" }}
                    />
                  </motion.a>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Quote Section */}
      <Box sx={{ py: 2, bgcolor: "transparent" }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      position: "relative",
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
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
                      }}
                    >
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          style={{
                            position: "absolute",
                            width: Math.random() * 50 + 30,
                            height: Math.random() * 50 + 30,
                            borderRadius: "50%",
                            background: `rgba(${Math.random() * 255}, ${
                              Math.random() * 255
                            }, ${Math.random() * 255}, 0.05)`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, Math.random() * 50 - 25],
                            x: [0, Math.random() * 50 - 25],
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

                    <Box sx={{ position: "relative", zIndex: 1 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: "text.primary",
                          mb: 2,
                          textAlign: "center",
                          fontWeight: 400,
                          fontStyle: "italic",
                          lineHeight: 1.6,
                          textShadow: "0 0 10px rgba(63,81,181,0.2)",
                        }}
                      >
                        "The only way to do great work is to love what you do."
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "primary.main",
                          textAlign: "center",
                          fontWeight: 600,
                          textShadow: "0 0 10px rgba(63,81,181,0.2)",
                        }}
                      >
                        - Steve Jobs
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
