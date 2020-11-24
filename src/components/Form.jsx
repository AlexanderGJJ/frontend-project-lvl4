import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import userData from './UserContext.jsx';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { channelsColl: { currentChannelId } } = state;
  return {
    currentChannelId,
  };
};

const actionCreators = {
  addMessage: actions.addMessage,
};

class Form extends React.Component {
  static contextType = userData.userContext;

  handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      const { addMessage } = this.props;
      addMessage({ values });
      setSubmitting(false);
      resetForm();
    }, 200);
  };

  render() {
    const { currentChannelId } = this.props;
    const userName = this.context;
    return (
        <Formik
            initialValues={{ textMessage: '', channelId: currentChannelId, user: userName }}
            onSubmit={this.handleSubmit}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="input-group">
                    <input
                        name="textMessage"
                        aria-label="body"
                        className="mr-2 form-control"
                        onChange={handleChange}
                        value={values.textMessage}
                    />
                    <button
                        disabled={isSubmitting}
                        aria-label="submit"
                        type="submit"
                        className="btn btn-primary"
                    >
                      Submit
                    </button>
                    <div className="d-block invalid-feedback">&nbsp;</div>
                  </div>
                </div>
              </form>
          )}
        </Formik>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Form);
