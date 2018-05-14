import React, { Fragment, Component } from 'react';
import ContactsList from '_js/modules/ContactsList';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

const allIcon = <FontIcon className="material-icons">group</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">star</FontIcon>;

class Home extends Component {

  navigate(path) {
    this.props.history.push(path);
  }

  render() {
    const selectedIndex = this.props.location.pathname === '/favorites' ? 1 : 0;
    return (
      <Fragment>
        <ContactsList favorites={!!this.props.favorites} />
        <Paper style={{
          position: 'fixed',
          bottom: 0,
          width: '100%'
        }}>
          <BottomNavigation selectedIndex={selectedIndex}>
            <BottomNavigationItem
              label="All"
              icon={allIcon}
              onClick={() => this.navigate('/')}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
              onClick={() => this.navigate('/favorites')}
            />
          </BottomNavigation>
        </Paper>
      </Fragment>
    );
  }
}

export default Home;
