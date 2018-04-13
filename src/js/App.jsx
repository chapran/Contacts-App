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
import NotFound from './routes/NotFound';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/favorites' exact render={(props) => (<Home favorites {...props} />)} />
            <Route path='/preview/:id' exact component={ContactPreview} />
            <Route path='/edit/:id' exact component={EditContact} />
            <Route path='/add_contact' exact component={AddContact} />
            <Route component={NotFound} />
          </Switch>
          <AppSnackbar />
        </Fragment>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

export default App;
