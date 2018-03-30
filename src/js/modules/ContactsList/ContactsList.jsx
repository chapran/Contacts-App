import React, { Fragment } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { deepOrange500, grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '_js/lib/Loader.jsx';
import { container } from '_styles/modules/_layout.scss';
import { buttonToolbar } from './styles.scss';

let ContactsList = ({ contacts }) => {
  if (contacts.isFetching) return <Loader />
  return (
    <Paper className={container} children={
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
                </Avatar>}>
              <div className={buttonToolbar}>
                <ActionGrade color={contact.favorite ? deepOrange500 : grey400} />
                <IconButton
                  iconClassName="material-icons"
                  tooltip="Edit"
                  tooltipPosition="bottom-right"
                  tooltipStyles={{ fontSize: '14px' }}>
                  mode_edit
              </IconButton>
              </div>
            </ListItem>
          </Link>
        ))}
      </List>
    } />
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts
})

ContactsList = connect(mapStateToProps)(ContactsList);

export default ContactsList;
