import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Admin = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/projects`,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      setProjects(response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  const handleOpenDialog = (project = null) => {
    setCurrentProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentProject(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const projectData = {
      title: formData.get("title"),
      description: formData.get("description"),
      technologies: formData
        .get("technologies")
        .split(",")
        .map((tech) => tech.trim()),
      imageUrl: formData.get("imageUrl"),
      liveUrl: formData.get("liveUrl"),
      githubUrl: formData.get("githubUrl"),
      featured: formData.get("featured") === "true",
      order: parseInt(formData.get("order")),
    };

    try {
      if (currentProject) {
        await axios.patch(
          `${process.env.REACT_APP_API_URL}/api/projects/${currentProject._id}`,
          projectData,
          {
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );
      } else {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/projects`,
          projectData,
          {
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );
      }
      fetchProjects();
      handleCloseDialog();
      setSnackbar({
        open: true,
        message: `Project ${
          currentProject ? "updated" : "created"
        } successfully`,
        severity: "success",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error saving project",
        severity: "error",
      });
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_API_URL}/api/projects/${id}`,
          {
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );
        fetchProjects();
        setSnackbar({
          open: true,
          message: "Project deleted successfully",
          severity: "success",
        });
      } catch (error) {
        setSnackbar({
          open: true,
          message: "Error deleting project",
          severity: "error",
        });
      }
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ py: 8, minHeight: "100vh", pt: 12 }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography variant="h2" sx={{ color: "primary.main" }}>
            Manage Projects
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpenDialog()}
          >
            Add New Project
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Technologies</TableCell>
                <TableCell>Featured</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project._id}>
                  <TableCell>{project.title}</TableCell>
                  <TableCell>{project.technologies.join(", ")}</TableCell>
                  <TableCell>{project.featured ? "Yes" : "No"}</TableCell>
                  <TableCell>{project.order}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleOpenDialog(project)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(project._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            {currentProject ? "Edit Project" : "Add New Project"}
          </DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                fullWidth
                label="Title"
                name="title"
                defaultValue={currentProject?.title}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Description"
                name="description"
                defaultValue={currentProject?.description}
                margin="normal"
                multiline
                rows={4}
                required
              />
              <TextField
                fullWidth
                label="Technologies (comma-separated)"
                name="technologies"
                defaultValue={currentProject?.technologies.join(", ")}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Image URL"
                name="imageUrl"
                defaultValue={currentProject?.imageUrl}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Live URL"
                name="liveUrl"
                defaultValue={currentProject?.liveUrl}
                margin="normal"
              />
              <TextField
                fullWidth
                label="GitHub URL"
                name="githubUrl"
                defaultValue={currentProject?.githubUrl}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Featured"
                name="featured"
                defaultValue={currentProject?.featured ? "true" : "false"}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Order"
                name="order"
                type="number"
                defaultValue={currentProject?.order || 0}
                margin="normal"
                required
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary">
                {currentProject ? "Update" : "Create"}
              </Button>
            </DialogActions>
          </form>
        </Dialog>

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
      </Container>
    </Box>
  );
};

export default Admin;
