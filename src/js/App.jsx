import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './modules/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
