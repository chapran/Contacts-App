import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { red700 } from 'material-ui/styles/colors';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';

import Loader from '_js/lib/Loader.jsx';
import { toggleFavorite, deleteContact, updateSnackbar } from '_js/actions';
import DialogBox from './childComponents/DialogBox.jsx';
import Map from '_js/modules/Map.jsx';

class _ContactPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpened: false
    }
    this.openModal = this.openModal.bind(this);
  }

  deleteContact(id) {
    this.closeModal();
    setTimeout(() => {
      this.props.history.replace('/');
      this.props.deleteContact(id);
      this.props.updateSnackbar('Contact has been deleted');
    }, 450);
  }

  closeModal() {
    this.setState({
      modalOpened: false
    })
  }

  openModal() {
    this.setState({
      modalOpened: true
    })
  }

  render() {
    const { contacts, match, toggleFavorite } = this.props;
    if (contacts.get('contactsList').size) {
      const contact = contacts.get('contactsList').find(item => item.id == match.params.id)
      return (
        <Card className='container'>
          <CardTitle
            title={`${contact.firstname} ${contact.lastname}`}
            subtitle={contact.workplace || ''}
          />
          {contact.note &&
            <Fragment>
              <Divider />
              <CardText>
                {contact.note}
              </ CardText>
            </Fragment>
          }
          <Divider />
          <List>
            <ListItem
              primaryText="Firstname"
              secondaryText={contact.firstname}
              disabled
            />
            <ListItem
              primaryText="Lastname"
              secondaryText={contact.lastname}
              disabled
            />
            {contact.workplace &&
              <ListItem
                primaryText="Company"
                secondaryText={contact.workplace}
                disabled
              />
            }
            <ListItem
              primaryText="Email"
              secondaryText={contact.email}
              disabled
            />
            <ListItem
              primaryText="Phone number"
              secondaryText={contact.phone}
              disabled
            />
            {contact.dateOfBirth &&
              <ListItem
                primaryText="Date of birth"
                secondaryText={(new Date(contact.dateOfBirth + ' UTC'))
                  .toISOString()
                  .substring(0, 10)}
                disabled
              />
            }
          </List>
          {contact.livingPlace &&
            <div style={{
              padding: '12px 16px 16px'
            }}>
              <p style={{
                marginTop: '0'
              }}>
                Living place
              </p>
              <Map
                latitude={contact.livingPlace.latitude}
                longitude={contact.livingPlace.longitude} />
            </div>
          }
          <Divider />
          <CardActions>
            <Link to={`/edit/${contact.id}`}>
              <FlatButton label="Edit" />
            </Link>
            <FlatButton
              label={contact.favorite ? 'Remove from favorites' : 'Add to favorites'}
              onClick={() => toggleFavorite(contact.id)}
            />
            <RaisedButton
              label='Delete contact'
              labelColor='#fff'
              backgroundColor={red700}
              onClick={this.openModal}
            />
          </CardActions>
          <DialogBox
            modalOpened={this.state.modalOpened}
            deleteContact={() => this.deleteContact(contact.id)}
            closeModal={() => this.closeModal()}
          />
        </Card>
      );
    }
    return <Loader />
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: id => {
    dispatch(toggleFavorite(id))
  },
  deleteContact: id => {
    dispatch(deleteContact(id))
  },
  updateSnackbar: (message) => {
    dispatch(updateSnackbar(message))
  }
})

const ContactPreview = withRouter(connect(mapStateToProps, mapDispatchToProps)(_ContactPreview))

export default ContactPreview;
