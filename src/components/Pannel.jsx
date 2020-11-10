import React from 'react';
import _ from 'lodash';

const Panel = (props) => <div className="col-3 border-right">
    <div className="d-flex mb-2"><span>Channels</span>
      <button type="button" className="ml-auto p-0 btn btn-link">+</button>
    </div>
    <ul className="nav flex-column nav-pills nav-fill">
      {props.channels.map(({ name }) => <li key={_.uniqueId()} className="nav-item">
          <button type="button" className="nav-link btn-block mb-2 text-left btn btn-primary">{name}</button>
        </li>)}
    </ul>
  </div>;

export default Panel;
