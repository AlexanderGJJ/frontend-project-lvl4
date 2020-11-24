import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

export const sendMessage = createAction('SEND_MESSAGE');
export const addChannel = createAction('ADD_CHANNEL');
export const deleteChannel = createAction('DELETE_CHANNEL');

export const addMessage = ({ values }) => async (dispatch) => {
  const response = await axios.post(routes.channelMessagesPath(values.channelId),
    { data: { attributes: { values } } });
  const { attributes } = response.data.data;
  dispatch(sendMessage({ message: attributes }));
};
