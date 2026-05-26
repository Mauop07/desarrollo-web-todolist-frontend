import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: { isActive: 'task' },
  reducers: {
    setActive: (state, action) => {
      state.isActive = action.payload;
    }
  }
});

export const { setActive } = menuSlice.actions;
export default menuSlice.reducer;