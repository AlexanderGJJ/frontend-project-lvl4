import React from 'react';
import Form from './Form.jsx';

const Chat = () => <div className="col h-100">
      <div className="d-flex flex-column h-100">
        <div id="messages-box" className="chat-messages overflow-auto mb-3">
          <div><b>Athena.Koch34</b>: sasa</div>
        </div>
        <div className="mt-auto">
          <Form />
        </div>
      </div>
    </div>;

export default Chat;
