// eslint-disable-next-line import/no-unresolved
import gon from 'gon';
import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as action from '../actions';

const initState = {
  channels: [...gon.channels],
  currentChannelId: gon.currentChannelId,
};

const channelsColl = (state = initState) => state;

const messages = (state = []) => state;

const message = createReducer('', {
  [action.updateMessage]: (state, { payload: { textMessage } }) => textMessage,
});

export default combineReducers({
  channelsColl,
  messages,
  message,
});
