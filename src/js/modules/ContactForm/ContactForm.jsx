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
import { Divider } from 'material-ui';

import { textarea, hidden, livingPlaceCaption } from './styles.scss';
import Map from '_js/modules/Map.jsx';

// Validation functions
const required = value => (value == null ? 'This field is required' : undefined);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined;

class ConctactForm extends Component {

  // updateCoords(e) {

  // }

  render() {
    const { pristine, reset, submitting, handleSubmit } = this.props;
    const livingPlace = this.props.initialValues ? this.props.initialValues.livingPlace : undefined;
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
          name="phone"
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
        <Field
          name="livingPlace[latitude]"
          component={TextField}
          className={hidden}
        />
        <Field
          name="livingPlace[longitude]"
          component={TextField}
          className={hidden}
        />
        {livingPlace &&
          <div>
            <p className={livingPlaceCaption}>
              Living place
            </p>
            <Map
              latitude={livingPlace.latitude}
              longitude={livingPlace.longitude}
            // onDragEnd={(e) => this.updateCoords(e)}
            />
          </div>
        }
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
            label={this.props.initialValues ? 'Clear changes' : "Clear"}
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

const mapStateToProps = (state, ownProps) => ({
  initialValues: state.initialValues
})

ConctactForm = reduxForm({
  form: 'addContact'
}, mapStateToProps)(ConctactForm)

export default ConctactForm;
