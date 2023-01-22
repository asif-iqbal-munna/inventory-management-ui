import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Button from '@mui/material/Button';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Button color="primary" variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button color="secondary" variant="contained">Contained</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
