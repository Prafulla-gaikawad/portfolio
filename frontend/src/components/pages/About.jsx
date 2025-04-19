import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Button,
  useTheme,
} from "@mui/material";
import {
  Code as CodeIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Star as StarIcon,
  Person as PersonIcon,
  Description as DescriptionIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Web as WebIcon,
  Style as StyleIcon,
  DataObject as DataObjectIcon,
  Api as ApiIcon,
  Security as SecurityIcon,
  IntegrationInstructions as IntegrationIcon,
  Cloud as CloudIcon,
  Terminal as TerminalIcon,
  BugReport as BugReportIcon,
  Storage as DatabaseIcon,
  RocketLaunch as RocketIcon,
  GroupWork as GroupWorkIcon,
} from "@mui/icons-material";

const About = () => {
  const theme = useTheme();

  const skills = [
    "React.js & Next.js",
    "Node.js & Express.js",
    "MongoDB & SQL",
    "RESTful APIs",
    "Material-UI & Tailwind CSS",
    "Git & GitHub",
    "JavaScript & TypeScript",
    "HTML5 & CSS3",
    "Redux & Context API",
    "JWT Authentication",
    "Responsive Design",
    "Agile Methodologies",
  ];

  const education = [
    {
      degree:
        "Bachelor of Technology in Artificial Intelligence and Data Science",
      school: "Vishwakarma Institute of Information Technology",
      year: "Expected in June 2026",
      details: "Currently pursuing degree in AI and Data Science",
    },
    {
      degree: "Higher Secondary Education",
      school: "Jawahar Navodaya Vidyalaya, Jalgaon",
      year: "June 2022",
      details: "Percentage: 83.00%",
    },
  ];

  const experience = [
    {
      role: "Web Developer Intern",
      company: "Zummit Infolabs",
      location: "Bangalore (Remote)",
      period: "Aug 2023 - Apr 2024",
      description: [
        "Frontend Development: Contributed to live projects and improved the company website using React",
        "Backend Development: Developed and maintained backend functionalities for seamless integration",
        "Performance Optimization: Optimized website performance to ensure faster load times and better user experience",
      ],
      certificate:
        "https://drive.google.com/file/d/1Ob3NB0nanvn7OPFgr4ZpuAaj1wz0apDe/view?usp=sharing",
    },
    {
      role: "Full Stack Developer Intern",
      company: "CancerSpy",
      location: "Pune (Remote)",
      period: "Sept 2023 - Oct 2023",
      description: [
        "Lead Web Developer: Collaborated with a pre-seed college-based startup under Prof. Yashwant Ingle to develop a cancer awareness platform",
        "Designed and implemented the website interface for an engaging user experience",
        "Developed and integrated backend functionalities to support dynamic content delivery",
        "Enhanced website performance to ensure smooth and efficient operations",
      ],
    },
  ];

  const handleViewCertificate = (url) => {
    window.open(url, "_blank");
  };

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
            About Me
          </Typography>

          {/* Who I Am Section */}
          <Box sx={{ mb: 8 }}>
            <Paper
              elevation={3}
              sx={{
                p: 5,
                borderRadius: 4,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "5px",
                  background: "linear-gradient(90deg, #3f51b5, #f50057)",
                },
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                <PersonIcon
                  sx={{
                    fontSize: 40,
                    color: "primary.main",
                    mr: 2,
                    background: "rgba(63, 81, 181, 0.1)",
                    p: 1,
                    borderRadius: 2,
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    position: "relative",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: 60,
                      height: 3,
                      background: "linear-gradient(90deg, #3f51b5, #f50057)",
                      borderRadius: 3,
                    },
                  }}
                >
                  Who I Am
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                  color: "text.primary",
                  pl: 1,
                }}
              >
                I am a passionate Full Stack Developer with a strong foundation
                in both frontend and backend development. My journey in web
                development started during my college years, and I've been
                constantly learning and improving my skills ever since.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                  color: "text.primary",
                  pl: 1,
                }}
              >
                I believe in writing clean, maintainable code and creating
                user-friendly applications that solve real-world problems. When
                I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community.
              </Typography>
            </Paper>
          </Box>

          {/* Experience Section */}
          <Box sx={{ mb: 8 }}>
            <Paper
              elevation={3}
              sx={{
                p: 5,
                borderRadius: 4,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "5px",
                  background: "linear-gradient(90deg, #f50057, #3f51b5)",
                },
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                <WorkIcon
                  sx={{
                    fontSize: 40,
                    color: "secondary.main",
                    mr: 2,
                    background: "rgba(245, 0, 87, 0.1)",
                    p: 1,
                    borderRadius: 2,
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    color: "secondary.main",
                    fontWeight: 700,
                    position: "relative",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: 60,
                      height: 3,
                      background: "linear-gradient(90deg, #f50057, #3f51b5)",
                      borderRadius: 3,
                    },
                  }}
                >
                  Experience
                </Typography>
              </Box>
              <List sx={{ pl: 0 }}>
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ListItem
                      sx={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        p: 3,
                        mb: 2,
                        borderRadius: 2,
                        bgcolor:
                          index % 2 === 0
                            ? "rgba(63, 81, 181, 0.03)"
                            : "transparent",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(63, 81, 181, 0.05)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <ListItemIcon>
                          <StarIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold" }}
                            >
                              {exp.role}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              variant="subtitle1"
                              sx={{ color: "secondary.main" }}
                            >
                              {exp.company} | {exp.location} | {exp.period}
                            </Typography>
                          }
                        />
                      </Box>
                      <Box sx={{ ml: 4, mt: 2, width: "100%" }}>
                        {exp.description.map((item, idx) => (
                          <Typography
                            key={idx}
                            variant="body1"
                            sx={{
                              color: "text.secondary",
                              fontSize: "1.1rem",
                              mb: 1.5,
                              display: "flex",
                              alignItems: "flex-start",
                              "&:before": {
                                content: '"•"',
                                color: "secondary.main",
                                mr: 1,
                                fontWeight: "bold",
                                fontSize: "1.5rem",
                                lineHeight: 1,
                              },
                            }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>
                      {exp.certificate && (
                        <Box sx={{ ml: 4, mt: 2 }}>
                          <Button
                            variant="outlined"
                            startIcon={<DescriptionIcon />}
                            onClick={() =>
                              handleViewCertificate(exp.certificate)
                            }
                            sx={{
                              color: "secondary.main",
                              borderColor: "secondary.main",
                              borderRadius: 2,
                              px: 3,
                              py: 1,
                              "&:hover": {
                                borderColor: "secondary.dark",
                                backgroundColor: "rgba(245, 0, 87, 0.05)",
                                color: "secondary.dark",
                              },
                            }}
                          >
                            View Internship Certificate
                          </Button>
                        </Box>
                      )}
                    </ListItem>
                    {index < experience.length - 1 && (
                      <Divider sx={{ my: 3, opacity: 0.2 }} />
                    )}
                  </motion.div>
                ))}
              </List>
            </Paper>
          </Box>

          {/* Education Section */}
          <Box sx={{ mb: 8 }}>
            <Paper
              elevation={3}
              sx={{
                p: 5,
                borderRadius: 4,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "5px",
                  background: "linear-gradient(90deg, #4caf50, #3f51b5)",
                },
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                <SchoolIcon
                  sx={{
                    fontSize: 40,
                    color: "success.main",
                    mr: 2,
                    background: "rgba(76, 175, 80, 0.1)",
                    p: 1,
                    borderRadius: 2,
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    color: "success.main",
                    fontWeight: 700,
                    position: "relative",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: 60,
                      height: 3,
                      background: "linear-gradient(90deg, #4caf50, #3f51b5)",
                      borderRadius: 3,
                    },
                  }}
                >
                  Education
                </Typography>
              </Box>
              <List sx={{ pl: 0 }}>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ListItem
                      sx={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        p: 3,
                        mb: 2,
                        borderRadius: 2,
                        bgcolor:
                          index % 2 === 0
                            ? "rgba(76, 175, 80, 0.03)"
                            : "transparent",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(76, 175, 80, 0.05)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <ListItemIcon>
                          <StarIcon color="success" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold" }}
                            >
                              {edu.degree}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              variant="subtitle1"
                              sx={{ color: "success.main" }}
                            >
                              {edu.school} | {edu.year}
                            </Typography>
                          }
                        />
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          ml: 4,
                          mt: 1,
                          color: "text.secondary",
                          fontSize: "1.1rem",
                        }}
                      >
                        {edu.details}
                      </Typography>
                    </ListItem>
                    {index < education.length - 1 && (
                      <Divider sx={{ my: 3, opacity: 0.2 }} />
                    )}
                  </motion.div>
                ))}
              </List>
            </Paper>
          </Box>

          {/* Skills & Expertise Section */}
          <Box sx={{ py: 8, bgcolor: "background.paper" }}>
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
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
                  Skills & Expertise
                </Typography>

                <Grid container spacing={4}>
                  {/* Frontend Skills */}
                  <Grid item xs={12} md={4}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: 4,
                          height: "100%",
                          borderRadius: 4,
                          background:
                            "linear-gradient(135deg, rgba(63,81,181,0.1) 0%, rgba(245,0,87,0.1) 100%)",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: "primary.main",
                            mb: 3,
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <CodeIcon color="primary" />
                          Frontend Development
                        </Typography>
                        <Grid container spacing={2}>
                          {[
                            {
                              name: "React.js & Next.js",
                              icon: <WebIcon color="primary" />,
                            },
                            {
                              name: "Material-UI & Tailwind CSS",
                              icon: <StyleIcon color="primary" />,
                            },
                            {
                              name: "Redux & Context API",
                              icon: <DataObjectIcon color="primary" />,
                            },
                            {
                              name: "JavaScript & TypeScript",
                              icon: <CodeIcon color="primary" />,
                            },
                            {
                              name: "HTML5 & CSS3",
                              icon: <WebIcon color="primary" />,
                            },
                            {
                              name: "Responsive Design",
                              icon: <StyleIcon color="primary" />,
                            },
                          ].map((skill) => (
                            <Grid item xs={12} key={skill.name}>
                              <Paper
                                sx={{
                                  p: 2,
                                  bgcolor: "background.paper",
                                  borderRadius: 2,
                                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                {skill.icon}
                                <Typography variant="body1">
                                  {skill.name}
                                </Typography>
                              </Paper>
                            </Grid>
                          ))}
                        </Grid>
                      </Paper>
                    </motion.div>
                  </Grid>

                  {/* Backend Skills */}
                  <Grid item xs={12} md={4}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: 4,
                          height: "100%",
                          borderRadius: 4,
                          background:
                            "linear-gradient(135deg, rgba(245,0,87,0.1) 0%, rgba(63,81,181,0.1) 100%)",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: "secondary.main",
                            mb: 3,
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <StorageIcon color="secondary" />
                          Backend Development
                        </Typography>
                        <Grid container spacing={2}>
                          {[
                            {
                              name: "Node.js & Express.js",
                              icon: <TerminalIcon color="secondary" />,
                            },
                            {
                              name: "MongoDB & SQL",
                              icon: <DatabaseIcon color="secondary" />,
                            },
                            {
                              name: "RESTful APIs",
                              icon: <ApiIcon color="secondary" />,
                            },
                            {
                              name: "JWT Authentication",
                              icon: <SecurityIcon color="secondary" />,
                            },
                            {
                              name: "API Integration",
                              icon: <IntegrationIcon color="secondary" />,
                            },
                            {
                              name: "Server Deployment",
                              icon: <CloudIcon color="secondary" />,
                            },
                          ].map((skill) => (
                            <Grid item xs={12} key={skill.name}>
                              <Paper
                                sx={{
                                  p: 2,
                                  bgcolor: "background.paper",
                                  borderRadius: 2,
                                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                {skill.icon}
                                <Typography variant="body1">
                                  {skill.name}
                                </Typography>
                              </Paper>
                            </Grid>
                          ))}
                        </Grid>
                      </Paper>
                    </motion.div>
                  </Grid>

                  {/* Tools & Technologies */}
                  <Grid item xs={12} md={4}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: 4,
                          height: "100%",
                          borderRadius: 4,
                          background:
                            "linear-gradient(135deg, rgba(33,150,243,0.1) 0%, rgba(76,175,80,0.1) 100%)",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: "info.main",
                            mb: 3,
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <BuildIcon color="info" />
                          Tools & Technologies
                        </Typography>
                        <Grid container spacing={2}>
                          {[
                            {
                              name: "Git & GitHub",
                              icon: <CodeIcon color="info" />,
                            },
                            {
                              name: "VS Code & Dev Tools",
                              icon: <TerminalIcon color="info" />,
                            },
                            {
                              name: "Postman & API Testing",
                              icon: <BugReportIcon color="info" />,
                            },
                            {
                              name: "MongoDB Atlas",
                              icon: <DatabaseIcon color="info" />,
                            },
                            {
                              name: "Netlify & Vercel",
                              icon: <RocketIcon color="info" />,
                            },
                            {
                              name: "Agile & Scrum",
                              icon: <GroupWorkIcon color="info" />,
                            },
                          ].map((skill) => (
                            <Grid item xs={12} key={skill.name}>
                              <Paper
                                sx={{
                                  p: 2,
                                  bgcolor: "background.paper",
                                  borderRadius: 2,
                                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                {skill.icon}
                                <Typography variant="body1">
                                  {skill.name}
                                </Typography>
                              </Paper>
                            </Grid>
                          ))}
                        </Grid>
                      </Paper>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
            </Container>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
