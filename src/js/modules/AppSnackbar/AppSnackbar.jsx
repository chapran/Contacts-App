import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';

let AppSnackbar = ({ snackbar }) => {
  return (
    <Snackbar
      open={snackbar.show}
      message={snackbar.message}
      autoHideDuration={3000}
    />
  );
};

AppSnackbar = connect(state => ({
  snackbar: state.snackbar
}))(AppSnackbar);

export default AppSnackbar;
