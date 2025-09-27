import React, { useState } from 'react';
import { 
  Typography, 
  Paper, 
  Box, 
  TextField, 
  Button, 
  Grid,
  Alert
} from '@mui/material';
import { GitHub, Email, Phone } from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Get In Touch
            </Typography>
            
            {submitted && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Thank you for your message! We'll get back to you soon.
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
                fullWidth
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Project Information
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <GitHub sx={{ mr: 2, color: 'primary.main' }} />
              <Box>
                <Typography variant="subtitle1">GitHub Repository</Typography>
                <Typography variant="body2" color="text.secondary">
                  github.com/Prateek-sinha-08/SIH25_MCA
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email sx={{ mr: 2, color: 'primary.main' }} />
              <Box>
                <Typography variant="subtitle1">Email</Typography>
                <Typography variant="body2" color="text.secondary">
                  team@sih25mca.com (placeholder)
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone sx={{ mr: 2, color: 'primary.main' }} />
              <Box>
                <Typography variant="subtitle1">Phone</Typography>
                <Typography variant="body2" color="text.secondary">
                  +91 XXXXX XXXXX (placeholder)
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" sx={{ mt: 3 }}>
              This project is developed for Smart India Hackathon 2025. 
              Feel free to reach out for any questions, suggestions, or collaboration opportunities.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;