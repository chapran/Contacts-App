import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const DialogBox = ({modalOpened, deleteContact, closeModal}) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={closeModal}
    />,
    <RaisedButton
      label="Delete"
      primary={true}
      onClick={deleteContact}
    />
  ]
  return (
    <Dialog
      title="Remove contact"
      actions={actions}
      open={modalOpened}
    >
      Are you sure you want to remove this contact from the list? This action&nbsp;
      <span style={{ color: 'red' }}>can not be reverted</span>
      .
    </Dialog>
  );
};

DialogBox.propTypes = {
  modalOpened: PropTypes.bool.isRequired,
  deleteContact: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default DialogBox;
