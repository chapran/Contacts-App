import React from 'react';
import AppBar from 'material-ui/AppBar';
import { withRouter, NavLink } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';

import { navToolbar } from './styles.scss';

let Header = ({ contacts, location }) => {
  let title;
  if (location.pathname.match(/preview/)) title = "Contact preview";
  else if (location.pathname.match(/edit/)) title = "Edit contact";
  else if (location.pathname.match(/add_contact\/?$/)) title = "Add new contact";
  else title = "All Contacts";
  return (
    <AppBar
      title={title}
      showMenuIconButton={false}
      children={
        <div className={navToolbar}>
          <NavLink to='/'>
            <IconButton
              iconClassName="material-icons"
              tooltip="Home"
              tooltipPosition="bottom-center"
              tooltipStyles={{ fontSize: '14px' }}>
              home
            </IconButton>
          </NavLink>
          <NavLink to='/add_contact'>
            <IconButton
              iconClassName="material-icons"
              tooltip="Add contact"
              tooltipPosition="bottom-center"
              tooltipStyles={{ fontSize: '14px' }}>
              person_add
            </IconButton>
          </NavLink>
        </div>
      } />
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

Header = withRouter(connect(mapStateToProps)(Header));

export default Header;
