import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, register } from 'redux/actions/authActions';
import { User } from 'types';
// import { AppState } from 'redux/store';

// const hydrate = createAction<AppState>(HYDRATE);
export type AuthState = Partial<{
  accessToken: string;
  refreshToken: string;
  user: User;
}>;

export const initialState: AuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<AuthState>) => {
      return { ...state, ...action.payload };
    },
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    [login, register].forEach((thunk) =>
      builder.addCase(thunk.fulfilled, (state, { payload }: PayloadAction<any>) => {
        return { ...state, ...payload };
      })
    );
    [login, register].forEach((thunk) =>
      builder.addCase(thunk.rejected, () => {
        return initialState;
      })
    );
  },
});

export const authActions = {
  ...authSlice.actions,
  login,
  register,
};
