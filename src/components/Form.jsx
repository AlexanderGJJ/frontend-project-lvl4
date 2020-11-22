import React from 'react';
import { Formik } from 'formik';

const Form = () => (
      <Formik
          initialValues={{ textMessage: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
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
                      onBlur={handleBlur}
                      value={values.textMessage}
                  />
                  {errors.textMessage}
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

export default Form;
