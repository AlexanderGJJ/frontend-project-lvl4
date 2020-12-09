import { createAction } from '@reduxjs/toolkit';

export const sendMessage = createAction('SEND_MESSAGE');
export const addChannel = createAction('ADD_CHANNEL');
export const deleteChannel = createAction('DELETE_CHANNEL');
export const initMessages = createAction('INIT_MESSAGES');
export const initChannels = createAction('INIT_CHANNELS');
