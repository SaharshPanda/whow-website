import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material';
// import './index.css'
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Make sure 'main' is defined
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f4f6f8',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#000000', // Black background
      paper: '#121212',   // Dark grey for paper components
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#b0bec5', // Light grey text
    },
  },
});


createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>

  <StrictMode>
    <App />
  </StrictMode>
  </ThemeProvider>
)
