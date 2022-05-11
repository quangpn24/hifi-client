import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authSlice } from './reducers/authSlice';
import { chattingSlice } from './reducers/chattingSlice';
import { userReducer } from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userReducer,
    chatting: chattingSlice.reducer,
  },
  devTools: true,
});
// const makeStore = () => store;

// export const wrapper = createWrapper<AppStore>(makeStore);

export type AppDispatch = typeof store.dispatch;
// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
