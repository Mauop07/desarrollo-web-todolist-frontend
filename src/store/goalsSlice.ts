import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000';
const HEADERS = { 'Content-Type': 'application/json', 'authorization': 'Mau-777-Key' };

export const fetchGoals = createAsyncThunk('goals/fetchGoals', async () => {
  const response = await fetch(`${API_URL}/getGoals`, { headers: HEADERS });
  return await response.json();
});

export const addGoalAsync = createAsyncThunk('goals/addGoal', async (goalData: any) => {
  const response = await fetch(`${API_URL}/addGoal`, { method: 'POST', headers: HEADERS, body: JSON.stringify(goalData) });
  return await response.json();
});

export const removeGoalAsync = createAsyncThunk('goals/removeGoal', async (id: string) => {
  await fetch(`${API_URL}/removeGoal`, { method: 'DELETE', headers: HEADERS, body: JSON.stringify({ id }) });
  return id;
});

const goalsSlice = createSlice({
  name: 'goals',
  initialState: { list: [] as any[] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.fulfilled, (state, action) => { state.list = action.payload || []; })
      .addCase(addGoalAsync.fulfilled, (state, action) => { state.list.push(action.payload); })
      .addCase(removeGoalAsync.fulfilled, (state, action) => { state.list = state.list.filter(goal => goal._id !== action.payload); });
  }
});
export default goalsSlice.reducer;