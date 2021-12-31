import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Login } from './screens/login/login.screen';
import { loginPath } from './screens/login/login.types';
import theme from './themes/main/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={loginPath} element={<Login />} />
        </Routes>
      </ThemeProvider>

    </div>
  );
}

export default App;
