import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userData from 'constant/data.json';

export type SocialState = Array<{
  network: string;
  url: string;
}>;

const initialState: SocialState = userData.socials;

export const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    updateSocial: (state, action: PayloadAction<{ network: string; url: any }>) => {
      const { network, url } = action.payload;
      if (state.find((item) => item.network == network)) {
        return state.map((item) => (item.network == network ? { network, url } : item));
      } else {
        state.push({ network, url });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSocial } = socialSlice.actions;

export default socialSlice.reducer;
