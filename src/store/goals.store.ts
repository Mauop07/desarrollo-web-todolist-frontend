import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type Goal = {
  id: number;
  name: string;
  description: string;
  dueDate: string;
};

interface GoalState {
  goals: Goal[];
  addGoal: (goal: Goal) => void;
  removeGoal: (id: number) => void;
}

export const useGoalStore = create<GoalState>()(
  devtools((set) => ({
    goals: [
      { id: 1, name: "Meta de prueba", description: "Descripción de prueba", dueDate: "2024-05-31" }
    ],
    addGoal: (goal) => set((state) => ({ goals: [...state.goals, goal] }), false, 'addGoal'),
    removeGoal: (id) => set((state) => ({ goals: state.goals.filter(g => g.id !== id) }), false, 'removeGoal'),
  }), { name: 'GoalStore' })
);