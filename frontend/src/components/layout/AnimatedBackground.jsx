import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  // Generate random positions for the animated elements
  const generateRandomPosition = () => {
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.5 + Math.random() * 1.5,
      opacity: 0.1 + Math.random() * 0.3,
    };
  };

  // Generate 15 animated elements
  const elements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    ...generateRandomPosition(),
    color:
      i % 5 === 0
        ? "rgba(63, 81, 181, 0.2)" // Primary color
        : i % 5 === 1
        ? "rgba(245, 0, 87, 0.2)" // Secondary color
        : i % 5 === 2
        ? "rgba(76, 175, 80, 0.2)" // Success color
        : i % 5 === 3
        ? "rgba(255, 152, 0, 0.2)" // Warning color
        : "rgba(33, 150, 243, 0.2)", // Info color
    duration: 15 + Math.random() * 30, // Random duration between 15-45 seconds
  }));

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      {elements.map((element) => (
        <motion.div
          key={element.id}
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: element.color,
            filter: "blur(40px)",
            left: `${element.x}%`,
            top: `${element.y}%`,
            scale: element.scale,
            opacity: element.opacity,
          }}
          animate={{
            x: [
              `${element.x}%`,
              `${element.x + (Math.random() * 20 - 10)}%`,
              `${element.x}%`,
            ],
            y: [
              `${element.y}%`,
              `${element.y + (Math.random() * 20 - 10)}%`,
              `${element.y}%`,
            ],
            scale: [
              element.scale,
              element.scale * (0.8 + Math.random() * 0.4),
              element.scale,
            ],
            opacity: [
              element.opacity,
              element.opacity * (0.5 + Math.random() * 0.5),
              element.opacity,
            ],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </Box>
  );
};

export default AnimatedBackground;
