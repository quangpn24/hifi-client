import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { chattingReducer } from './reducers/chattingReducer';
import { userReducer } from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    chatting: chattingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
