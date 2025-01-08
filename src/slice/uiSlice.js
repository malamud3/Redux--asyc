import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = { ui: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,

  reducers: {
    toggle(state) {
      state.ui = !state.ui;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;