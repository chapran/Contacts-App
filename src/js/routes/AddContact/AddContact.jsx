import React, { Component } from 'react';
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ConctactForm from '_js/modules/ContactForm';
import AddUserImg from '_img/add-user.png';
import { addContact, updateSnackbar } from '_js/actions';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }

  addContact(values) {
      this.props.history.push('/');
      this.props.addContact(values);
      this.props.updateSnackbar('Contact has beed added');
  }

  render() {
    return (
      <Card className='container'>
        <CardMedia>
          <img
            className='topFormContainerImage'
            src={AddUserImg}
            alt="add contact image" />
        </CardMedia>
        <CardText>
          <h4 style={{ textAlign: 'center' }}>
            Please fill in following fields for the new contact.
          </h4>
          <Divider />
          <ConctactForm onSubmit={this.addContact} />
        </CardText>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addContact: (data) => {
    dispatch(addContact(data))
  },
  updateSnackbar: (message) => {
    dispatch(updateSnackbar(message))
  }
})

AddContact = withRouter(connect(null, mapDispatchToProps)(AddContact));

export default AddContact;
