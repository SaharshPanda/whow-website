// src/components/CourseList.js
import React from 'react';
import Grid from '@mui/material/Grid';
import CourseCard from './CourseCard.jsx';

const CourseList = ({ courses, onRegister }) => {
    return (
        <Grid container spacing={3}>
            {courses.map(course => (
                <Grid item xs={12} sm={6} md={4} key={course.id}>
                    <CourseCard course={course} onRegister={onRegister} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CourseList;
