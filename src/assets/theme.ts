import { createMuiTheme } from '@material-ui/core/styles';

const font = "'Teko', sans-serif";

export const theme = createMuiTheme({
  typography: {
    fontFamily: font
  },

  palette: {
    primary: {
      main: '#fafafa'
    },
    secondary: {
      main: '#f6b004'
    }
  }
});
