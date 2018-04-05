import React, { Component } from 'react';
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ConctactForm from '_js/modules/ContactForm';
import EditUserImg from '_img/edit-user.png';
import { editContact, updateSnackbar } from '_js/actions';

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.editContact = this.editContact.bind(this);
  }

  editContact(values) {
      this.props.history.push('/');
      this.props.editContact(this.props.match.params.id, values);
      this.props.updateSnackbar('Contact has beed edited');
  }

  render() {
    const contact = this.props.contacts.find(item => item.id == this.props.match.params.id);
    return (
      <Card className='container'>
        <CardMedia>
          <img
            className='topFormContainerImage'
            src={EditUserImg}
            alt="edit contact image" />
        </CardMedia>
        <CardText>
          <Divider />
          <ConctactForm onSubmit={this.editContact} initialValues={contact}/>
        </CardText>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.contactsList
})

const mapDispatchToProps = dispatch => ({
  editContact: (id, data) => {
    dispatch(editContact(id, data))
  },
  updateSnackbar: (message) => {
    dispatch(updateSnackbar(message))
  }
})

EditContact = withRouter(connect(mapStateToProps, mapDispatchToProps)(EditContact));

export default EditContact;