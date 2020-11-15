import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { message } = state;
  return {
    message,
  };
};

const actionCreators = {
  updateMessage: actions.updateMessage,
};

class Form extends React.Component {
  handleTextMessage = (e) => {
    e.preventDefault();
    const { updateMessage } = this.props;
    updateMessage({ textMessage: e.target.value });
  }

  render() {
    const { message } = this.props;
    return <form action="#">
    <div className="form-group">
      <div className="input-group">
        <input name="body" aria-label="body" className="mr-2 form-control" onChange={this.handleTextMessage} value={message} />
        <button aria-label="submit" type="submit" className="btn btn-primary">Submit</button>
        <div className="d-block invalid-feedback">&nbsp;</div>
      </div>
    </div>
  </form>;
  }
}

export default connect(mapStateToProps, actionCreators)(Form);
