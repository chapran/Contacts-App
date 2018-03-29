import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import Home from './modules/Home';
import ContactPreview from './modules/ContactPreview';

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/preview/:id' exact component={ContactPreview} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
