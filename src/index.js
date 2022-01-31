import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/js/global';
import { lightTheme } from './assets/styles/js/theme';

import AppRouter from './routers/AppRouter';

import reportWebVitals from './reportWebVitals';
import configureStore from './services/redux/store/configureStore';


const store = configureStore();


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();