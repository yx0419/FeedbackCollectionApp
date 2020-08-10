import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import formFields from './formFields';
import FieldFileInput from '/Users/yunjae/MyProjectsToPutOnGithub/FeedbackCollection/server/clientapp/src/components/surveys/fileUpload.js';

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={SurveyField}
                    type="text"
                    label={label}
                    name={name}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}

                    <Field
                        key={'keystr'}
                        component={FieldFileInput}
                        label={'labelstr'}
                        name={'name'}
                    />
                    <Link to="/surveys" className="green btn-flat white-text">
                        Cancel
          </Link>
                    <button type="submit" className="green teal btn-flat right white-text">
                        Next
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);