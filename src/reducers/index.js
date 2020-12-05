// eslint-disable-next-line import/no-unresolved
import gon from 'gon';
import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as action from '../actions';

const initState = {
  channels: [...gon.channels],
  currentChannelId: gon.currentChannelId,
};

const channelsColl = (state = initState) => state;

const messagesColl = createReducer({ byId: {}, allIds: [] }, {
  [action.initMessages]: (state, { payload: { messages } }) => {
    const idColl = {};
    const allIds = messages.map(({ id }) => id);
    messages.forEach((message) => {
      idColl[message.id] = message;
    });
    return { byId: idColl, allIds };
  },
  [action.sendMessage]: (state, { payload: { message } }) => {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [message.id]: message },
      allIds: [...allIds, message.id],
    };
  },
});

export default combineReducers({
  channelsColl,
  messagesColl,
});
