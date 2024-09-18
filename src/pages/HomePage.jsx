import React, { useState } from 'react';
import {
  Container, Typography, Grid, Box, Button, Card, CardContent, CardMedia, Paper, Divider, Avatar,
  Stack
} from '@mui/material';
import { styled } from '@mui/system';
import { useSpring } from '@react-spring/web';
import { coursesData } from '../data/courses.js';
import logo from "../assets/Whow.gif";
import goat from "../assets/GOAT.gif";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CircularProgress } from '@mui/material';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 4),
  background: 'linear-gradient(to right, #000, #333)',
  color: 'white',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(4),
  boxShadow: theme.shadows[6],
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2),  // Adjust padding for smaller screens
  },
}));

const VisualSkillsOpportunities = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),  // Reduce padding for mobile
  },
}));

const CourseCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  overflow: 'hidden',
  backgroundColor: '#f5f5f5',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}));

const RegisterButton = styled(Button)(({ theme }) => ({
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  '&:hover': {
    opacity: 1,
  },
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  backgroundColor: '#f5f5f5',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),  // Adjust padding for mobile screens
  },
}));

const HomePage = () => {
  const [courses] = useState(coursesData);
  const [open, setOpen] = useState(false);

  // Function to handle opening the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <HeroSection>
        <img src={logo} alt="logo" style={{ width: '150px', height: '150px', borderRadius: '30%' }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Learn <b style={{ color: 'red' }}>Real-World Skills</b>, Grab <b style={{ color: 'red' }}>Career Opportunities</b>
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Gain real-world skills and career opportunities to know, grow, and earn from your passions.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} marginTop={2}>
          <Button variant='contained' color='error' href="https://docs.google.com/forms/d/e/1FAIpQLSeTmFJTUZ71O42L4ayjO4IHgKrwrdfXbStGkX4krNo7RGEFnw/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer">
            Register
          </Button>
        </Stack>
      </HeroSection>

      {/* Skills & Opportunities Section */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="center">
        <Typography variant="h3" component="h2" gutterBottom>
          Our Focus
          <div>
            <span style={{ color: 'red' }}>Connecting Skills with Opportunity.</span>
          </div>
        </Typography>
        <img src={goat} alt="logo" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
      </Stack>

      {/* Featured Courses Section */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Courses
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {courses.map(course => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <CourseCard sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  alt={course.title}
                  height="250"
                  image={course.image}
                  sx={{ filter: 'brightness(0.7)', }}
                />
                {/* Overlay content */}
                <Box
                sx={{  
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              color: 'white',
              padding: 2,
              textAlign: 'center',
              // background: 'rgba(0, 0, 0, 0.4)',  // Background always applied
              paddingTop: 4, 
            }}
                >
                  <Typography variant="h5" component="div" sx={{ color: 'white' }}>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'lightgrey', marginTop: 1 }}>
                    {course.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2, width: '100%' }}
                    onClick={handleClickOpen}

                  >
                    Preview Roadmap
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2, width: '100%' }}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeTmFJTUZ71O42L4ayjO4IHgKrwrdfXbStGkX4krNo7RGEFnw/viewform?usp=sf_link"
                    target="_top"
                    rel="noopener noreferrer">
                    Register
                  </Button>
                </Box>
              </CourseCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Testimonials Section */}
      {/* <Box
        sx={{
          marginBottom: 6,
          padding: 4,
          background: 'black',
          borderRadius: '12px',
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 4,
          }}
        >
          What Our Students Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {["Durgesh Sahu", "Sonia Singh"].map((name, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <TestimonialCard>
                <Avatar
                  alt={name}
                  src={`https://example.com/avatar/${idx}.jpg`}
                  sx={{
                    width: 100,
                    height: 100,
                    marginBottom: 2,
                    border: '2px solid #3f51b5',
                  }}
                />
                <Typography variant="h6" component="h3">
                  {name}
                </Typography>
                <Typography variant="body1">
                  "My experience with this platform has been nothing short of amazing. The skills I've learned are
                  helping me in real-world scenarios!"
                </Typography>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Box> */}

      {/* Dialog for Course Preview */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="preview-dialog-title"
        aria-describedby="preview-dialog-description"
      >
        <DialogTitle id="preview-dialog-title">Preview Course Roadmap</DialogTitle>
        <DialogContent>
          <DialogContentText id="preview-dialog-description">
            Here’s a detailed preview of what you'll learn during the course.
          </DialogContentText>
          <Box sx={{ width: '100%', textAlign: 'center', marginTop: 2 }}>
            <CircularProgress />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default HomePage;
