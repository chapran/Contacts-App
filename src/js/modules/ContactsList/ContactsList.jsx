import React, { Fragment } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { deepOrange500, grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';

import Loader from '_js/lib/Loader.jsx';
import { buttonToolbar } from './styles.scss';

class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackBarOpened: false,
      snackBarMessage: ''
    }
  }

  componentDidUpdate({ contacts }) {
    const currentList = this.props.contacts.contactsList;
    console.log(currentList.length, contacts.contactsList.length);
    if (currentList.length < contacts.contactsList.length) {
      this.setState({
        snackBarOpened: true,
        snackBarMessage: "Contact has been removed"
      })
    } else if (currentList.length === contacts.contactsList.length + 1) {
      this.setState({
        snackBarOpened: true,
        snackBarMessage: "Contact has been added"
      })
    }
  }

  render() {
    const { contacts, history } = this.props;
    if (contacts.isFetching) return <Loader />
    return (
      <Fragment>
        <Paper className='container' children={
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
                      tooltipStyles={{ fontSize: '14px' }}
                      onClick={(e) => {
                        e.preventDefault();
                        history.push(`/edit/${contact.id}`);
                      }}>
                      mode_edit
                    </IconButton>
                  </div>
                </ListItem>
              </Link>
            ))}
          </List>
        } />
        <Snackbar
          open={this.state.snackBarOpened}
          message={this.state.snackBarMessage}
          autoHideDuration={3000}
        />
      </Fragment>
    );
  };
}

const mapStateToProps = state => ({
  contacts: state.contacts
})

ContactsList = withRouter(connect(mapStateToProps)(ContactsList));

export default ContactsList;
