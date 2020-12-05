import React from 'react';
import { connect } from 'react-redux';
import Form from './Form.jsx';

const mapStateToProps = (state) => {
  const { messagesColl: { byId, allIds } } = state;
  const messages = allIds.map((id) => byId[id]);
  return { messages };
};

class Chat extends React.Component {
  render() {
    const { messages } = this.props;
    return (
        <div className="col h-100">
          <div className="d-flex flex-column h-100">
            <div id="messages-box" className="chat-messages overflow-auto mb-3">
            {messages.map(({ textMessage, user, id }) => (
              (<div key={id}><b>{user}</b>: {textMessage}</div>)))}
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
