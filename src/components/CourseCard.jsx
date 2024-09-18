// src/components/CourseCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CourseCard = ({ course, onRegister }) => {
    return (
        <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {course.description}
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ marginTop: 2 }} 
                    onClick={() => onRegister(course.id)}>
                    Register
                </Button>
            </CardContent>
        </Card>
    );
};

export default CourseCard;
