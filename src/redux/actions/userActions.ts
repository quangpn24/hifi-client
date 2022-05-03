import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

export const getUser = createAsyncThunk('user/getUser', async (id: String) => {
  const response = await userApi.getUser(id);
  return response.data;
});
