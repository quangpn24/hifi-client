import { createAction } from '@reduxjs/toolkit';
import { Room } from 'types';

export const setRoom = createAction('user/getUser', (room: Room) => {
  return { payload: room };
});
