import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

let ContactPreview = ({ contacts, match }) => {
  if (contacts.contactsList.length) {
    const contact = contacts.contactsList.find(item => item.id == match.params.id)
    return (
      <Fragment>
        {/* TODO */}
      </Fragment>
    );
  }
  return <p>Loading...</p>
};

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

ContactPreview = withRouter(connect(mapStateToProps)(ContactPreview))

export default ContactPreview;
