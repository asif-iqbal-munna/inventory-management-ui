import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#069A8E',
    },
    secondary: {
      main: '#0081C9',
    },
    info: {
      main: '#FF597B',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.4rem',
    },
  },
});

export default theme;
