import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    subtitle1: {
      color: 'rgba(0, 0, 0, 0.8)',
    },
    body1: {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
  palette: {
    background: {
      default: '#fcfaff',
    },
    primary: {
      main: '#E04D01',
      light: '#fff3e4',
      dark: '#e1dcd5',
      contrastText: '#efefef',
    },
    secondary: {
      main: '#2d2d2d',
      light: '#f9f7fc',
      dark: '#222222',
      contrastText: '#ffffff',
    },
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
      },
    },
  },
});
export default theme;
