import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import './index.css';
import 'animate.css/animate.min.css';
import App from './App';
import { NavStateProvider } from './contexts/navState';
import theme from './Theme';

ReactDOM.render(
  <>
    <CssBaseline />
    <NavStateProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </NavStateProvider>
  </>,
  document.getElementById('root')
);
