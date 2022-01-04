import React, {useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Login } from './screens/login/login.screen';
import { LoginPath } from './screens/login/login.types';
import { GlobalStyle } from './themes/main/global-style';
import { Provider } from 'react-redux';
import theme from './themes/main/theme';
import store from './store/store/store';
import { HomePath } from './screens/home/home.types';
import Home from './screens/home/home.screen';
import UserGuard from './components/routers/user-guard/user.guard.component';

function App() {

  // const navigate = useNavigate()

  // useEffect(() => {
  //   navigate(HomePath)
  // }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path={LoginPath} element={<Login />} />
          <Route path={HomePath} element={<UserGuard><Home/></UserGuard>} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
