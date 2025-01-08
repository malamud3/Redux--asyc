import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = { ui: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,

  reducers: {
    toggle(state) {
      state.ui = !state.ui;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
