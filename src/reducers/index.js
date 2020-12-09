import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as action from '../actions';

const channelsColl = createReducer({ channels: [], currentChannelId: null }, {
  [action.initChannels]: (state, { payload: { channels, currentChannelId } }) => ({
    channels,
    currentChannelId,
  }),
});

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
