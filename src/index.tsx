import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/fonts.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Container, ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from "./components/theme";
import {createTheme} from "@mui/material/styles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const lightTheme = createTheme({
    palette: {
        mode: 'light', // Set the theme to light mode
        primary: {
            main: '#1976d2', // Customize your primary color
        },
        secondary: {
            main: '#dc004e', // Customize your secondary color
        },
        background: {
            default: '#ffffff', // Set background color
            paper: '#f5f5f5', // Set paper background color
        },
        text: {
            primary: '#000000', // Set primary text color
            secondary: '#666666', // Set secondary text color
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif', // Customize your font family
    },
});


root.render(
  <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container sx={{ mt: 4 }} fixed>
        <App />
      </Container>
  </ThemeProvider>
);

reportWebVitals();
