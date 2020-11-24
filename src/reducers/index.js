// eslint-disable-next-line import/no-unresolved
import gon from 'gon';
import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as action from '../actions';

const initState = {
  channels: [...gon.channels],
  currentChannelId: gon.currentChannelId,
};

const channelsColl = (state = initState) => state;

const messages = createReducer([], {
  [action.sendMessage]: (state = [], { payload: { message } }) => {
    console.log(message);
  },
});

export default combineReducers({
  channelsColl,
  messages,
});
