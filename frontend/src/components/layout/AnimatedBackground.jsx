import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const colors = [
    "rgba(255, 182, 193, 0.1)", // Light Pink
    "rgba(173, 216, 230, 0.1)", // Light Blue
    "rgba(144, 238, 144, 0.1)", // Light Green
    "rgba(255, 218, 185, 0.1)", // Peach
    "rgba(230, 230, 250, 0.1)", // Lavender
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
      }}
    >
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 100 + 50;
        const rotation = Math.random() * 360;
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: size,
              height: size,
              background: color,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              transform: `rotate(${rotation}deg)`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.5],
              rotate: [rotation, rotation + 180],
              borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "70% 30% 30% 70% / 70% 70% 30% 30%",
                "30% 70% 70% 30% / 30% 30% 70% 70%",
              ],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        );
      })}
      {[...Array(10)].map((_, i) => {
        const size = Math.random() * 30 + 20;
        const rotation = Math.random() * 360;

        return (
          <motion.div
            key={`small-${i}`}
            style={{
              position: "absolute",
              width: size,
              height: size,
              background: "rgba(255, 255, 255, 0.3)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: "50%",
              filter: "blur(0.5px)",
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
              scale: [1, Math.random() * 0.3 + 0.7],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </Box>
  );
};

export default AnimatedBackground;
