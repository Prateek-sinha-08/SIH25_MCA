import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

const theme = createTheme();

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    </BrowserRouter>
  );
};

test('renders SIH25 MCA Project title', () => {
  renderWithProviders(<App />);
  const titleElement = screen.getByText(/SIH25 MCA Project/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  renderWithProviders(<App />);
  
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});