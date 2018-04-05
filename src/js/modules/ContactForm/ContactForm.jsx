import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {
  TextField,
  Checkbox,
  DatePicker,
  SelectField,
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { CardActions } from 'material-ui/Card';

import { textarea } from './styles.scss';
import { Divider } from 'material-ui';

// Validation functions
const required = value => (value == null ? 'This field is required' : undefined);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined;

class ConctactForm extends Component {

  render() {
    const { pristine, reset, submitting, handleSubmit } = this.props;
    return (
      <form
        className='clearfix'
        onSubmit={handleSubmit}>
        <Field
          name="firstname"
          component={TextField}
          floatingLabelText="First name"
          validate={required}
        />
        <br />
        <Field
          name="lastname"
          component={TextField}
          floatingLabelText="Last name"
          validate={required}
        />
        <br />
        <Field
          name="email"
          type='email'
          component={TextField}
          floatingLabelText="Email"
          validate={[required, email]}
        />
        <br />
        <Field
          name="tel"
          type='tel'
          component={TextField}
          floatingLabelText="Phone number"
          validate={required}
        />
        <br />
        <Field
          name="note"
          component={TextField}
          floatingLabelText="Note"
          multiLine={true}
          rowsMax={4}
          fullWidth={true}
          className={textarea}
        />
        <br />
        <Field
          name="workplace"
          component={TextField}
          floatingLabelText="Workplace"
        />
        <br />
        <Field
          name="dateOfBirth"
          component={DatePicker}
          floatingLabelText="Date of birth"
          format={null}
        />
        <br />
        <Field
          name="favorite"
          component={Checkbox}
          label="Set favorite"
          labelPosition='right'
          style={{ margin: '30px 0' }}
        />
        <Divider />
        <CardActions>
          <RaisedButton
            label="Clear"
            disabled={pristine || submitting}
            onClick={reset} />
          <RaisedButton
            type='submit'
            label="Save"
            primary
            disabled={submitting} />
        </CardActions>
      </form>
    );
  }
}

ConctactForm = reduxForm({
  form: 'addContact'
})(ConctactForm)

export default ConctactForm;
