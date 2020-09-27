import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './themes';
import { GlobalStyle, PageWrapper } from './components/globals/styles';
import LinearProgress from './components/progress/LinearProgress';

const Home = lazy(() => import('./screens/home'));
const Preferences = lazy(() => import('./screens/preferences'));
const Samples = lazy(() => import('./screens/samples'));
const Refill = lazy(() => import('./screens/refill'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <PageWrapper />
        <main>
          <Suspense fallback={<LinearProgress />}>
            <Switch>
              <Route component={Home} path='/' />
              <Route component={Preferences} path='/preferences' />
              <Route component={Samples} path='/samples' />
              <Route component={Refill} path='/refill' />
            </Switch>
          </Suspense>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
