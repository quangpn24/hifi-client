import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import { setAuthToken } from 'api/axiosClient';
import axios from 'axios';
import { User as FirebaseUser } from 'firebase/auth';

const login = createAsyncThunk('auth/login', async (user: FirebaseUser, { rejectWithValue }) => {
  try {
    console.log('Login: ', user);
    const signInProvider = user.providerData[0]?.providerId;
    const loginData =
      signInProvider === 'password'
        ? { uid: user.uid, signInProvider }
        : {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            picture: user.photoURL,
            signInProvider: signInProvider,
          };
    // const {
    //   data: { data: loginUser, accessToken, refreshToken },
    // } = await axios.post('/api/proxy/auth/login', loginData);
    const authState = authApi.login(loginData);
    // console.log('/api/proxy/auth/login', loginUser);
    return authState;
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response.data);
    }
  }
});
const register = createAsyncThunk('auth/register', async (user: FirebaseUser) => {
  const authState = await authApi.register({
    uid: user?.uid,
    email: user.email,
    name: user.displayName,
    picture: user.photoURL,
    signInProvider: user.providerData[0]?.providerId || 'password',
  });
  setAuthToken(authState.accessToken);
  return authState;
});

export { login, register };
