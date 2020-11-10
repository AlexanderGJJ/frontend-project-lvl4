import React from 'react';
import Panel from './components/Pannel.jsx';
import Chat from './components/Chat.jsx';

class App extends React.Component {
  render() {
    const { channels } = this.props.data;

    return <div className="row h-100 pb-3">
      <Panel channels={channels}/>
      <Chat/>
    </div>;
  }
}

export default App;
