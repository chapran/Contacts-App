import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import { container } from '_styles/modules/_layout.scss';
import Loader from '_js/lib/Loader.jsx';
import { toggleFavorite } from '_js/actions';

let ContactPreview = ({ contacts, match, toggleFavorite }) => {
  if (contacts.contactsList.length) {
    const contact = contacts.contactsList.find(item => item.id == match.params.id)
    return (
      <Card className={container}>
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
            secondaryText={contact.tel}
            disabled
          />
        </List>
        <CardActions>
          <Link to={`/edit/${contact.id}`}>
            <FlatButton label="Edit" />
          </Link>
          <FlatButton
            label={contact.favorite ? 'Remove from favorites' : 'Add to favorites'}
            onClick={() => toggleFavorite(contact.id)}
          />
        </CardActions>
      </Card>
    );
  }
  return <Loader />
};

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: id => {
    dispatch(toggleFavorite(id))
  }
})

ContactPreview = withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactPreview))

export default ContactPreview;
