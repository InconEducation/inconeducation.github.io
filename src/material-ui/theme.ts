import { createTheme } from '@mui/material/styles';

// Create a theme instance.

const colorPrimary = "#3369b4"
const colorSecondary = "#63B1FF"
const colorInfo = "#fffff"

const colorBlack = "#000000"
const colorWhite = "#ffffff"

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
          color: colorWhite
        }
      }
    },
    MuiFab: {
      styleOverrides: {
        root: {
          position: 'fixed', 
          bottom: 50,
          right: 50,
          padding: '30px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        containedInfo: {
          backgroundColor: colorWhite,
          color: colorPrimary
        }
      }
    }
  }
});

export default theme;