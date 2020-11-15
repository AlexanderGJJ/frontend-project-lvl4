// eslint-disable-next-line import/no-unresolved
import gon from 'gon';
import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as action from '../actions';

const initState = {
  channelsColl: [...gon.channels],
  currentChannelId: gon.currentChannelId,
};

const channels = (state = initState) => state;

const messages = (state = []) => state;

const message = createReducer('', {
  [action.updateMessage]: (state, { payload: { textMessage } }) => textMessage,
});

export default combineReducers({
  channels,
  messages,
  message,
});
