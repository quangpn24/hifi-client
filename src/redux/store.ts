import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authSlice } from './reducers/authSlice';
import awardReducer from './reducers/awardReducer';
import { chattingSlice } from './reducers/chattingSlice';
import educationReducer from './reducers/educationReducer';
import introReducer from './reducers/introReducer';
import labelReducer from './reducers/labelReducer';
import socialReducer from './reducers/socialReducer';
import templateReducer from './reducers/templateReducer';
import themeReducer from './reducers/themeReducer';
import workReducer from './reducers/workReducer';

export const store = configureStore({
  reducer: {
    intro: introReducer,
    social: socialReducer,
    education: educationReducer,
    work: workReducer,
    label: labelReducer,
    award: awardReducer,
    theme: themeReducer,
    template: templateReducer,
    auth: authSlice.reducer,
    chatting: chattingSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
