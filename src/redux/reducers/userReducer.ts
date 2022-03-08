import { createReducer } from '@reduxjs/toolkit';
import { getUser } from 'redux/actions/userActions';

export type userState = {
  data: object;
  pending: boolean;
  error: boolean;
};

const initialState: userState = {
  data: {},
  pending: false,
  error: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUser.pending, (state) => {
      state.pending = true;
    })
    .addCase(getUser.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
    })
    .addCase(getUser.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});
