import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import activityReducer from './reducers/activityReducer';
import educationReducer from './reducers/educationReducer';
import introReducer from './reducers/introReducer';
import socialReducer from './reducers/socialReducer';
import { userReducer } from './reducers/userReducer';
import workReducer from './reducers/workReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    intro: introReducer,
    social: socialReducer,
    education: educationReducer,
    work: workReducer,
    activity: activityReducer,
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
