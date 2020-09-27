import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import { theme } from './themes';
import { GlobalStyle, PageWrapper } from './components/globals/styles';

const Home = lazy(() => import('./screens/home'));
const Preferences = lazy(() => import('./screens/preferences'));
const Dispenser = lazy(() => import('./screens/dispenser'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <PageWrapper />
        <main>
          <Suspense fallback={<LinearProgress color='primary' />}>
            <Switch>
              <Route component={Home} path='/' />
              <Route component={Preferences} path='/preferences' />
              <Route component={Dispenser} path='/dispenser' />
            </Switch>
          </Suspense>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
