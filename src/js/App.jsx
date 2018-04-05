import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';
import Header from './modules/Header';
import Home from './routes/Home';
import ContactPreview from './routes/ContactPreview';
import AddContact from './routes/AddContact';
import EditContact from './routes/EditContact';
import AppSnackbar from './modules/AppSnackbar';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/preview/:id' exact component={ContactPreview} />
            <Route path='/edit/:id' exact component={EditContact} />
            <Route path='/add_contact' exact component={AddContact} />
          </Switch>
          <AppSnackbar />
        </Fragment>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

export default App;
