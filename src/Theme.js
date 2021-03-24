import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      goldText: '#f9b934',
      goldBorder: 'rgba(249, 185, 52, 0.5)',
      black: '#3c423d',
      selectedBg: 'rgba(0,0,0,0.08)',
      darkenBg: 'rgba(0,0,0,0.54)',
    },
    text: {
      primary: '#2d3748',
      secondary: '#718096',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Hanyi',
    },
    h2: {
      fontFamily: 'Hanyi',
    },
    h3: {
      fontFamily: 'Hanyi',
    },
    h4: {
      fontFamily: 'Hanyi',
    },
    h5: {
      fontFamily: 'Hanyi',
    },
    h6: {
      fontFamily: 'Hanyi',
    },
    body1: {
      fontFamily: 'Hanyi',
    },
    button: {
      fontFamily: 'Hanyi',
    },
    largeButton: {
      fontSize: '1.1rem',
    },
  },
  expandMoreIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    border: '2px solid #ffc107',
    cursor: 'pointer',
    background: 'transparent',
    color: 'rgb(255, 193, 7)',
  },
});

export default responsiveFontSizes(theme);
