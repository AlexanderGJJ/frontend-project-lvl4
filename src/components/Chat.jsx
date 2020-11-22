import React, { useContext } from 'react';
import Form from './Form.jsx';
import userData from './UserContext.jsx';

function Chat() {
  const { userContext } = userData;
  const userName = useContext(userContext);
  return (
    <div className="col h-100">
      <div className="d-flex flex-column h-100">
        <div id="messages-box" className="chat-messages overflow-auto mb-3">
          <div><b>{ userName }</b>: sasa</div>
        </div>
        <div className="mt-auto">
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default Chat;
