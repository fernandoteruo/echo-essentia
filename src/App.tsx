import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from './themes';
import { GlobalStyle } from './components/globals/styles';
import ModalLoading from './components/feedback/ModalLoading';
import SnackbarWrapper from './context/Snackbar';
import store from './store';

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarWrapper>
          <GlobalStyle />
          <Router>
            <Suspense fallback={fallback}>
              <main>
                <Switch>
                  <Route exact path='/' component={Start} />
                  <Route exact path='/products' component={Products} />
                  <Route exact path='/volumes' component={Volume} />
                  <Route exact path='/payment' component={Payment} />
                  <Route exact path='/filling' component={Filling} />
                  <Route exact path='/thank-you' component={ThankYou} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </main>
            </Suspense>
          </Router>
        </SnackbarWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
