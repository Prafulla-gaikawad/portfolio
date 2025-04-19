import React from "react";
import { Box, Container } from "@mui/material";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatedBackground />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
          ml: { sm: "240px" },
          transition: "margin 0.3s ease",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
