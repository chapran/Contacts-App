import React, { Fragment } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { deepOrange500, grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Loader from '_js/lib/Loader.jsx';
import { buttonToolbar } from './styles.scss';
import { updateSearch } from '_js/actions';
import SearchBar from '_js/modules/SearchBar';

class ContactsList extends React.Component {

  render() {
    const { contacts, history, searchState, updateSearch } = this.props;
    if (contacts.get('isFetching')) return <Loader />
    let filteredContacts;
    if (this.props.favorites) {
      filteredContacts = contacts.get('contactsList').filter(item => item.favorite);
    } else {
      filteredContacts = contacts.get('contactsList').filter(item => {
        const searchRegExp = new RegExp(searchState, 'i');
        return searchRegExp.test(item.firstname) || searchRegExp.test(item.lastname)
      });
    }
    
    filteredContacts = filteredContacts.sortBy(item => item.firstname);
    return (
      <Paper className='container' children={
        <Fragment>
          {!this.props.favorites &&
            <SearchBar
              updateSearch={updateSearch}
              searchState={searchState} />
          }
          <List>
            {filteredContacts.map(contact => (
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
        </Fragment>
      } />
    );
  };
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  searchState: state.searchState
})

const mapDispatchToProps = dispatch => ({
  updateSearch: text => {
    dispatch(updateSearch(text))
  }
})

ContactsList = withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsList));

export default ContactsList;
