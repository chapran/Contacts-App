import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {
  TextField,
  Checkbox,
  DatePicker
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

class _ConctactForm extends Component {

  updateCoords(e) {
    this.props.change('livingPlace[latitude]', e.latLng.lat().toFixed(6))
    this.props.change('livingPlace[longitude]', e.latLng.lng().toFixed(6))
  }

  render() {
    const { pristine, reset, submitting, handleSubmit } = this.props;
    const livingPlace = this.props.livingPlace;
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
        <div>
          <p className={livingPlaceCaption}>
            Living place
            </p>
          <Map
            latitude={(livingPlace && livingPlace.latitude) || 0}
            longitude={(livingPlace && livingPlace.longitude) || 0}
            onDragEnd={(e) => this.updateCoords(e)}
          />
        </div>
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

const mapStateToProps = (state) => ({
  initialValues: state.initialValues
});

let ConctactForm = reduxForm({
  form: 'addContact'
}, mapStateToProps)(_ConctactForm);

const selector = formValueSelector('addContact');

ConctactForm = connect(
  state => selector(state, "livingPlace[latitude]", "livingPlace[longitude]")
)(ConctactForm);

export default ConctactForm;
