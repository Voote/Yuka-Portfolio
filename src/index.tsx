import { render } from 'react-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './assets/theme';
import App from './App';

render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
