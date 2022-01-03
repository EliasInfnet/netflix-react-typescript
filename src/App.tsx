import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Login } from './screens/login/login.screen';
import { loginPath } from './screens/login/login.types';
import { GlobalStyle } from './themes/main/global-style';
import { Provider } from 'react-redux';
import theme from './themes/main/theme';
import store from './store/store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path={loginPath} element={<Login />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
