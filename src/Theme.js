import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const darkLogoRed = 'rgba(217,39,31,255)';

const defaultTheme = createMuiTheme({});

const theme = createMuiTheme({
  palette: {
    common: {
      lightLogoRed: '#F9EBE3',
      darkLogoRed,
      black: '#3c423d',
      selectedBg: 'rgba(0,0,0,0.08)',
      darkenBg: 'rgba(0,0,0,0.54)',
      lightGrey: 'rgb(237, 241, 242)',
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
    body2: {
      fontFamily: 'Hanyi',
    },
    subtitle1: {
      fontFamily: 'Hanyi',
    },
    subtitle2: {
      fontFamily: 'Hanyi',
    },
    button: {
      fontFamily: 'Hanyi',
    },
    largeButton: {
      fontSize: '1.1rem',
    },
    logoText: {
      fontFamily: 'Lato',
      fontWeight: 'bold',
      color: darkLogoRed,
    },
  },
  sectionPadding: {
    width: '100%',
    margin: '0 auto',
    padding: '48px 16px',
    maxWidth: '1236px',
    [defaultTheme.breakpoints.up('sm')]: {
      padding: '64px 64px',
    },
    [defaultTheme.breakpoints.up('md')]: {
      padding: '96px 64px',
    },
  },
  sectionTitleMarginBottom: {
    marginBottom: '24px',
    [defaultTheme.breakpoints.up('md')]: {
      marginBottom: '32px',
    },
  },
  cardHoverEffect: {
    boxShadow: '0 2px 10px 0 rgb(23 70 161 / 11%)',
    transition:
      'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      transform: 'translate3d(0,-5px,0)',
      boxShadow:
        '0 1.5rem 2.5rem rgb(22 28 45 / 10%), 0 0.3rem 0.5rem -0.5rem rgb(22 28 45 / 5%) !important;',
    },
  },
});

export default responsiveFontSizes(theme);
