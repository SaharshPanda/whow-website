// src/pages/CourseDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { coursesData } from '../data/courses.js';

const CourseDetailPage = () => {
    const { courseId } = useParams();
    const course = coursesData.find(course => course.id === parseInt(courseId));

    const handleSubmit = (formData) => {
        console.log('User registered with data:', formData);
    };

    if (!course) {
        return <Typography variant="h6">Course not found!</Typography>;
    }

    return (
        <Container sx={{ paddingTop: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                {course.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {course.description}
            </Typography>
            <RegistrationForm courseId={course.id} onSubmit={handleSubmit} />
        </Container>
    );
};

export default CourseDetailPage;
