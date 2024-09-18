// src/pages/HomePage.js
import React, { useState } from 'react';
import {
  Container, Typography, Grid, Box, Button, Card, CardContent, CardMedia, Paper, Divider, Avatar,
  Stack
} from '@mui/material';
import { styled } from '@mui/system';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faPaintBrush, faBusinessTime, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { coursesData } from '../data/courses.js';
import logo from "../assets/Whow.gif";
import goat from "../assets/GOAT.gif"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,CircularProgress } from '@mui/material';


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
}));

const VisualSkillsOpportunities = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SkillOpportunityIcon = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '50%',
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: theme.shadows[3],
  margin: theme.spacing(1),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
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
  // Animation for skills and opportunities
  const skillsOpportunitiesProps = useSpring({
    opacity: 1,
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 800 },
  });

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
        <Stack direction="row" spacing={2} marginTop={2}>
          {/* <Button variant='outlined' color='secondary' sx={{ borderColor: 'red', color: 'red' }}>Sign In</Button> */}
          <Button variant='contained' color='error'  href="https://docs.google.com/forms/d/e/1FAIpQLSeTmFJTUZ71O42L4ayjO4IHgKrwrdfXbStGkX4krNo7RGEFnw/viewform?usp=sf_link"
  target="_blank"
  rel="noopener noreferrer">Register</Button>
        </Stack>
      </HeroSection>

      {/* Skills & Opportunities Section */}
      <Stack direction={"row"} spacing={2}>

      <Typography variant="h3" component="h2" gutterBottom>
        Our Focus <div>
          <span style={{ color: 'red' }}>
             Connecting Skills with Opportunity.
        </span>
          </div>
          </Typography>

      <img src={goat} alt="logo" style={{ width: '500px', height: '500px' }} />
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
        sx={{ filter: 'brightness(0.7)', transition: 'filter 0.3s ease-in-out' }}
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
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          padding: 2,
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.4)',
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
          '&:hover': {
            opacity: 1,
          },
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
          rel="noopener noreferrer"        >
          Register
        </Button>
      </Box>
    </CourseCard>
  </Grid>
))}

        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box
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
    {["Durgesh Sahu", "Saharsh Panda", "Ayush Singh"].map((value, index) => (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <TestimonialCard
          sx={{
            padding: 3,
            background: 'grey',
            boxShadow: 3,
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 10,
            },
          }}
        >
          <Avatar
            alt={value}
            src={`https://source.unsplash.com/random/100x100?sig=${index}&face`}
            sx={{
              width: 100,
              height: 100,
              margin: '0 auto',
              marginBottom: 2,
              boxShadow: 2,
              border: '4px solid ',
            }}
          />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'black', marginTop: 2 }}
          >
            {value}
          </Typography>
          <Typography
            variant="body2"
            color="white"
            sx={{ marginTop: 1, fontStyle: 'italic' }}
          >
            "This platform has completely changed the way I learn. The courses
            are well-structured and easy to follow."
          </Typography>
        </TestimonialCard>
      </Grid>
    ))}
  </Grid>
</Box>


      {/* All Courses Section */}
      {/* <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Explore All Courses
        </Typography>
        <CourseList courses={courses} onRegister={(id) => console.log(`Register for course ID: ${id}`)} />
      </Box> */}

    

      {/* Footer Section */}
      <Box sx={{ padding: 4, backgroundColor: 'grey.800', color: 'white', borderRadius: 2 }}>
        <Divider sx={{ marginBottom: 2, borderColor: 'grey.700' }} />
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Course Registration App. All rights reserved.
        </Typography>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="roadmap-dialog-title"
        aria-describedby="roadmap-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="roadmap-dialog-title">Course Roadmap Preview</DialogTitle>
        <DialogContent>
          <DialogContentText id="roadmap-dialog-description">
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 4 }}>
              {/* 1. Basic Training */}
              <Box sx={{ textAlign: 'center' }}>
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={80}
                  thickness={5}
                  sx={{ color: 'primary.main' }}
                />
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  1-Month Basic Training
                </Typography>
              </Box>

              {/* 2. Program-Specific Training */}
              <Box sx={{ textAlign: 'center' }}>
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={80}
                  thickness={5}
                  sx={{ color: 'secondary.main' }}
                />
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  Program-Specific Training
                </Typography>
              </Box>

              {/* 3. Opportunity Selection */}
              <Box sx={{ textAlign: 'center' }}>
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={80}
                  thickness={5}
                  sx={{ color: 'success.main' }}
                />
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  Opportunity Selection
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" sx={{ marginTop: 4 }}>
              Here's a quick overview of your learning journey with us:
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
              1. Basic Training
            </Typography>
            <Typography variant="body2">
              A 1-month basic training that lays the foundation of core skills needed for the program.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
              2. Program-Specific Training
            </Typography>
            <Typography variant="body2">
              In-depth training focused on specific skills required for your chosen field.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
              3. Opportunity Selection
            </Typography>
            <Typography variant="body2">
              Once you complete the training, you will be able to choose opportunities based on your skills.
            </Typography>
          </DialogContentText>
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
