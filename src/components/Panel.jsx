import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import cn from 'classnames';

const mapStateToProps = (state) => {
  const { channels: { channelsColl, currentChannelId } } = state;
  return {
    channelsColl,
    currentChannelId,
  };
};

class Panel extends React.Component {
  renderList = (channels) => channels.map(({ name, id }) => {
    const btnClasses = cn('nav-link btn-block mb-2 text-left btn', {
      'btn-primary': this.props.currentChannelId === id,
      'btn-light': this.props.currentChannelId !== id,
    });
    return <li key={_.uniqueId()} className="nav-item">
              <button type="button" className={btnClasses}>{name}</button>
           </li>;
  });

  render() {
    const { channelsColl } = this.props;
    return <div className="col-3 border-right">
              <div className="d-flex mb-2"><span>Channels</span>
                <button type="button" className="ml-auto p-0 btn btn-link">+</button>
              </div>
              <ul className="nav flex-column nav-pills nav-fill">
                {this.renderList(channelsColl)}
              </ul>
           </div>;
  }
}

export default connect(mapStateToProps)(Panel);
