import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '90px',
      lineHeight: '90px',
      fontWeight: 400,
      margin: '0 0 1rem 0',
      color: 'rgba(0, 0, 0, 0.7)',
    },
    h2: {
      fontSize: '40px',
      lineHeight: '55px',
      fontWeight: 400,
      margin: '0 0 1rem 0',
      color: 'rgba(0, 0, 0, 0.7)',
    },
    h3: {
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: 400,
      margin: '0 0 1rem 0',
      color: 'rgba(0, 0, 0, 0.7)',
    },
    h4: {
      fontSize: '20px',
      lineHeight: '26px',
      fontWeight: 400,
      margin: '0 0 1rem 0',
      color: 'rgba(0, 0, 0, 0.7)',
    },
    p: {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
  palette: {
    primary: {
      main: '#E04D01',
      light: '#fff3e4',
      dark: '#c54300',
      contrastText: '#efefef',
    },
    secondary: {
      main: '#2d2d2d',
      light: '#f7f7f7',
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
