import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './themes';
import { GlobalStyle, ScreenTransition } from './components/globals/styles';
import CircularProgress from './components/progress/CircularProgress';

const Home = lazy(() => import('./screens/home'));
const Checklist = lazy(() => import('./screens/checklist'));

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
                <Home />
              </Route>
              <Route path='/checklist'>
                <Checklist />
              </Route>
            </Switch>
          </main>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
