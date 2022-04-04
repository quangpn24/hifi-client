import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { User } from 'firebase/auth';
export type AuthState = Partial<{
  accessToken: string;
  user: any;
}>;

const login = createAsyncThunk('auth/login', async (uid: string) => {
  const authState = await userApi.login(uid);
  return authState;
});
const register = createAsyncThunk('auth/register', async (user: User) => {
  const authState = await userApi.register({
    uid: user?.uid,
    email: user.email,
    name: user.displayName,
    picture: user.photoURL,
  });
  return authState;
});

export const initialState: AuthState = {
  accessToken: undefined,
  user: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    [login, register].forEach((thunk) =>
      builder.addCase(thunk.fulfilled, (state, { payload }: PayloadAction<AuthState>) => {
        return { ...state, ...payload };
      })
    );
  },
});

export const authActions = {
  ...authSlice.actions,
  login,
  register,
};
