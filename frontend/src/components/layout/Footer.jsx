import React from "react";
import { Box, Typography, IconButton, Container, Divider } from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      url: "https://github.com/coderpraful",
      label: "GitHub",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/coderpraful",
      label: "LinkedIn",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/coderpraful",
      label: "Twitter",
    },
    {
      icon: <EmailIcon />,
      url: "mailto:prafullagaikwad2003@gmail.com",
      label: "Email",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        background:
          "linear-gradient(135deg, rgba(63, 81, 181, 0.05) 0%, rgba(245, 0, 87, 0.05) 100%)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(63, 81, 181, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: { xs: 2, sm: 0 },
            }}
          >
            © {currentYear} Prafulla Gaikwad. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            {socialLinks.map((link) => (
              <IconButton
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                sx={{
                  color: "primary.main",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "secondary.main",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
