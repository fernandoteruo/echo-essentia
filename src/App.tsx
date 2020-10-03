import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './themes';
import { GlobalStyle } from './components/globals/styles';
import ModalLoading from './components/feedback/ModalLoading';
import SnackbarWrapper from './context/Snackbar';

const Start = lazy(() => import('./screens/start'));
const Products = lazy(() => import('./screens/products'));
const Volume = lazy(() => import('./screens/volume'));
const Payment = lazy(() => import('./screens/payment'));
const Filling = lazy(() => import('./screens/filling'));
const ThankYou = lazy(() => import('./screens/thank-you'));
const Login = lazy(() => import('./screens/login'));

function App() {
  const fallback = <ModalLoading />;
  return (
    <ThemeProvider theme={theme}>
      <SnackbarWrapper>
        <GlobalStyle />
        <Router>
          <Suspense fallback={fallback}>
            <main>
              <Switch>
                <Route exact path='/'>
                  <Start />
                </Route>
                <Route exact path='/products'>
                  <Products />
                </Route>
                <Route exact path='/products/:productId/volume'>
                  <Volume />
                </Route>
                <Route
                  exact
                  path='/products/:productId/volume/:volumeId/payment'
                >
                  <Payment />
                </Route>
                <Route
                  exact
                  path='/products/:productId/volume/:volumeId/filling'
                >
                  <Filling />
                </Route>
                <Route exact path='/thank-you'>
                  <ThankYou />
                </Route>
                <Route exact path='/login'>
                  <Login />
                </Route>
              </Switch>
            </main>
          </Suspense>
        </Router>
      </SnackbarWrapper>
    </ThemeProvider>
  );
}

export default App;
