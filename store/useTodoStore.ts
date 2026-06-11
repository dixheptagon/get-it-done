import { TodoFormValues } from "@/types/todoSchema";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TodoValues = TodoFormValues & {
  id: string;
};

type TodoStore = {
  selectedDate: string;
  todos: TodoValues[];
};

const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      selectedDate: new Date().toISOString().split("T")[0],

      todos: [],
    }),
    {
      name: "todo-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

const setSelectedDate = (date: string) => {
  useTodoStore.setState({ selectedDate: date });
};

const addTodo = (todo: TodoValues) => {
  useTodoStore.setState((state) => ({
    todos: [...state.todos, todo],
  }));
};

export { useTodoStore, setSelectedDate, addTodo };
export type { TodoStore };
