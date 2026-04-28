import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type Task = {
  id: number;
  name: string;
  description: string;
  dueDate: string;
};

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
}

export const useTaskStore = create<TaskState>()(
  devtools((set) => ({
    tasks: [
      { id: 1, name: "Tarea de prueba", description: "Descripción de prueba", dueDate: "2024-05-31" }
    ],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] }), false, 'addTask'),
    removeTask: (id) => set((state) => ({ tasks: state.tasks.filter(t => t.id !== id) }), false, 'removeTask'),
  }), { name: 'TaskStore' })
);