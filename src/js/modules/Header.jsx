import React from 'react';
import AppBar from 'material-ui/AppBar';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

let Header = ({ contacts, location }) => {
  let title;
  if (location.pathname.match(/preview/)) title = "Contact preview";
  else if (location.pathname.match(/edit/)) title = "Edit contact";
  else title = "All Contacts";
  return (
    <AppBar
      title={title}
      showMenuIconButton={false} />
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

Header = withRouter(connect(mapStateToProps)(Header));

export default Header;
