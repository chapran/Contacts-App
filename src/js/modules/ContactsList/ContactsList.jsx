import React, { Fragment } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { deepOrange500 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

let ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.contactsList.map(contact => (
        <Link
          to={`/preview/${contact.id}`}
          key={contact.id}>
          <ListItem
            primaryText={`${contact.firstname} ${contact.lastname}`}
            leftAvatar={
              <Avatar>
                {`${contact.firstname.slice(0, 1)}${contact.lastname.slice(0, 1)}`}
              </Avatar>}
            rightIcon={contact.favorite && <ActionGrade color={deepOrange500
            } />}
          />
        </Link>
      ))}
    </List>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts
})

ContactsList = connect(mapStateToProps)(ContactsList);

export default ContactsList;
