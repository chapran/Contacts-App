import React, { Fragment } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const SearchBar = (props) => {
  return (
    <Fragment>
      <TextField
        floatingLabelText="Search"
        value={props.searchState}
        onChange={(e) => props.updateSearch(e.target.value)}
        style={{
          marginRight: '20px'          
        }}
      />
      <RaisedButton
        label="Clear"
        onClick={() => props.updateSearch('')}
        style={{
          marginBottom: '15px'
        }}
      />
      <Divider />
    </Fragment>
  );
};

export default SearchBar;
