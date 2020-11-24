import React from 'react';
import { connect } from 'react-redux';
import Form from './Form.jsx';

const mapStateToProps = (state) => {
  const { messages } = state;
  return {
    messages,
  };
};

class Chat extends React.Component {
  render() {
    const { messages } = this.props;
    return (
        <div className="col h-100">
          <div className="d-flex flex-column h-100">
            <div id="messages-box" className="chat-messages overflow-auto mb-3">
              <div><b>{ 'userName' }</b>: sasa</div>
            </div>
            <div className="mt-auto">
              <Form/>
            </div>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps)(Chat);
