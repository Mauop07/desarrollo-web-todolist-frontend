import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import goalsReducer from './goalsSlice';
import menuReducer from './menuSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    goals: goalsReducer,
    menu: menuReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;