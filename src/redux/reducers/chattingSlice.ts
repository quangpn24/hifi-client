import { createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setRoom } from 'redux/actions/chattingActions';

export type chattingState = {
  rooms?: Room[];
  currentRoom?: Room;
};

const initialState: chattingState = {
  rooms: undefined,
  currentRoom: undefined,
};

export const chattingSlice = createSlice({
  name: 'chatting',
  initialState,
  reducers: {
    setRoomsState: (state, action: PayloadAction<Room[]>) => {
      return { ...state, rooms: action.payload };
    },
    setCurrentRoomState: (state, action: PayloadAction<Room>) => {
      return { ...state, currentRoom: action.payload };
    },
  },
});

export const { setRoomsState, setCurrentRoomState } = chattingSlice.actions;
