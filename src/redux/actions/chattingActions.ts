import { createAction } from '@reduxjs/toolkit';

export const setRoom = createAction('user/getUser', (room: Room) => {
  return { payload: room };
});
