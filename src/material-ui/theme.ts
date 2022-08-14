import { createTheme } from '@mui/material/styles';

// Create a theme instance.

const colorPrimary = "#3369b4"
const colorSecondary = "#ffffff"
const colorInfo = "#63B1FF"
const colorText = "#000000"

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito'
  },
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorSecondary,
    },
    info: {
      main: colorInfo,
    },
    mode: 'light',
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colorPrimary,
          color: colorSecondary
        }
      }
    },
    MuiFab: {
      styleOverrides: {
        root: {
          color: colorText,
          position: 'fixed', 
          bottom: 50,
          right: 50,
          padding: '30px'
        }
      }
    }
  }
});

export default theme;