import { createAction } from '@reduxjs/toolkit';

export const updateMessage = createAction('UPDATE_MESSAGE');
export const addMessage = createAction('ADD_MESSAGE');
export const addChannel = createAction('ADD_CHANNEL');
export const deleteChannel = createAction('DELETE_CHANNEL');
