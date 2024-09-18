// src/components/RegistrationForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const RegistrationForm = ({ courseId, onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ courseId, name, email });
    };

    return (
        <Box 
            component="form" 
            sx={{ '& .MuiTextField-root': { marginBottom: 2 }, maxWidth: 400 }} 
            onSubmit={handleSubmit}
        >
            <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth
            >
                Register
            </Button>
        </Box>
    );
};

export default RegistrationForm;
