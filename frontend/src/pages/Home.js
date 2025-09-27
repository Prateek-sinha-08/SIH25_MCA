import React from 'react';
import { Typography, Paper, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { Code, Web, Storage } from '@mui/icons-material';

const Home = () => {
  const features = [
    {
      icon: <Web fontSize="large" color="primary" />,
      title: 'Modern Frontend',
      description: 'Built with React.js and Material-UI for a responsive and intuitive user experience.'
    },
    {
      icon: <Code fontSize="large" color="primary" />,
      title: 'Robust Backend',
      description: 'Node.js and Express.js backend with comprehensive API endpoints and middleware.'
    },
    {
      icon: <Storage fontSize="large" color="primary" />,
      title: 'Scalable Database',
      description: 'MongoDB integration with proper data modeling and efficient queries.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Smart India Hackathon 2025
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          MCA Category Solution
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
          A comprehensive software solution developed to address real-world challenges through innovative technology implementation.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Paper>

      {/* Features Section */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Key Features
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Project Status */}
      <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Project Status
        </Typography>
        <Typography variant="body1">
          This project is currently in development for Smart India Hackathon 2025. 
          The foundation has been established with a modern tech stack and scalable architecture.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Home;