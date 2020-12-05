import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import userData from '../context/UserContext.jsx';
import routes from '../routes';

class Form extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  static contextType = userData.userContext;

  handleSubmit = (values, { setSubmitting, resetForm }) => {
    const submitForm = async () => {
      const { textMessage, user } = values;
      await axios.post(routes.channelMessagesPath(values.channelId),
        { data: { attributes: { textMessage, user } } });
      setSubmitting(false);
      resetForm();
      this.inputRef.current.focus();
    };
    try {
      submitForm();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const userName = this.context;
    return (
        <Formik
            initialValues={{ textMessage: '', user: userName }}
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
                        ref={this.inputRef}
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

export default Form;
