import { ThemeProvider } from '@emotion/react';
import { Box, CircularProgress, CssBaseline } from '@mui/material';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import theme from './theme/theme';
import commonStyles from './views/pages/styles/common';
import router from './views/routes/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={(
        <Box sx={commonStyles.spinner}>
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
