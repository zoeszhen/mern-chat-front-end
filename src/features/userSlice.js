import { createSlice } from '@reduxjs/toolkit';
import appApi from '../services/appApi';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    addNotifications: () => {},
    resetNotifications: () => {},
  },

  extraReducers: (builder) => {
    // save user after signup
    builder.addMatcher(
      appApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => payload,
    );
    // save user after login
    builder.addMatcher(
      appApi.endpoints.login.matchFulfilled,
      (state, { payload }) => payload,
    );
    // logout destroy user session
    builder.addMatcher(appApi.endpoints.login.matchFulfilled, () => null);
  },
});

export const { addNotifications, resetNotifications } = userSlice.actions;
export default userSlice.reducer;
