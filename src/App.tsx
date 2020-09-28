import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './themes';
import { GlobalStyle, ScreenTransition } from './components/globals/styles';
import CircularProgress from './components/feedback/CircularProgress';

const Start = lazy(() => import('./screens/start'));
const Products = lazy(() => import('./screens/products'));
const Volume = lazy(() => import('./screens/volume'));
const Payment = lazy(() => import('./screens/payment'));
const Filling = lazy(() => import('./screens/filling'));
const ThankYou = lazy(() => import('./screens/thank-you'));
const Error = lazy(() => import('./screens/error'));

function App() {
  const fallback = (
    <ScreenTransition>
      <CircularProgress />
    </ScreenTransition>
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Suspense fallback={fallback}>
          <main>
            <Switch>
              <Route exact path='/'>
                <Start />
              </Route>
              <Route path='/products'>
                <Products />
              </Route>
              <Route path='/products/:productId/volume'>
                <Volume />
              </Route>
              <Route path='/products/:productId/volume/:volumeId/payment'>
                <Payment />
              </Route>
              <Route path='/products/:productId/volume/:volumeId/filling'>
                <Filling />
              </Route>
              <Route path='/products/:productId/volume/:volumeId/thank-you'>
                <ThankYou />
              </Route>
              <Route path='/products/:productId/volume/:volumeId/error'>
                <Error />
              </Route>
            </Switch>
          </main>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
