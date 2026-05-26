import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000';
const HEADERS = { 'Content-Type': 'application/json', 'authorization': 'Mau-777-Key' };

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch(`${API_URL}/getTasks`, { headers: HEADERS });
  return await response.json();
});

export const addTaskAsync = createAsyncThunk('tasks/addTask', async (taskData: any) => {
  const response = await fetch(`${API_URL}/addTask`, { method: 'POST', headers: HEADERS, body: JSON.stringify(taskData) });
  return await response.json();
});

export const removeTaskAsync = createAsyncThunk('tasks/removeTask', async (id: string) => {
  await fetch(`${API_URL}/removeTask`, { method: 'DELETE', headers: HEADERS, body: JSON.stringify({ id }) });
  return id;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { list: [] as any[] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => { state.list = action.payload || []; })
      .addCase(addTaskAsync.fulfilled, (state, action) => { state.list.push(action.payload); })
      .addCase(removeTaskAsync.fulfilled, (state, action) => { state.list = state.list.filter(task => task._id !== action.payload); });
  }
});
export default tasksSlice.reducer;