import { ThemeProvider } from '@emotion/react';
import { Box, CircularProgress, CssBaseline } from '@mui/material';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import theme from './theme/theme';
import router from './views/routes/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={(
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
      >
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
