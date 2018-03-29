import React, { Fragment } from 'react';
import { container } from '_styles/modules/_layout.scss';
import ContactsList from '_js/modules/ContactsList';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

const Home = (props) => {
  return (
    <Fragment>
      <AppBar
        title='All Contacts'
        showMenuIconButton={false} />
      <Paper className={container} children={<ContactsList contacts={props.contacts} />} />
    </Fragment>
  );
};

export default Home;
