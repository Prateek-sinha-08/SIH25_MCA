import React from 'react';
import { Typography, Paper, Box, List, ListItem, ListItemText, Chip } from '@mui/material';

const About = () => {
  const techStack = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'Material-UI', category: 'UI Framework' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Web Framework' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'JWT', category: 'Authentication' }
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        About This Project
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Smart India Hackathon 2025 - MCA Category
        </Typography>
        <Typography variant="body1" paragraph>
          This project represents our team's solution for the Smart India Hackathon 2025, 
          specifically designed for the MCA (Master of Computer Applications) category. 
          Our solution focuses on addressing real-world challenges through innovative 
          software development and modern technology implementation.
        </Typography>
        <Typography variant="body1" paragraph>
          The project follows industry best practices with a full-stack architecture, 
          ensuring scalability, maintainability, and excellent user experience.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Technology Stack
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {techStack.map((tech, index) => (
            <Chip 
              key={index} 
              label={`${tech.name} (${tech.category})`}
              variant="outlined"
              color="primary"
            />
          ))}
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Project Objectives
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Innovation" 
              secondary="Develop cutting-edge solutions using modern technologies"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Scalability" 
              secondary="Build applications that can handle growing user demands"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="User Experience" 
              secondary="Create intuitive and responsive user interfaces"
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Real-world Impact" 
              secondary="Address genuine problems with practical solutions"
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default About;