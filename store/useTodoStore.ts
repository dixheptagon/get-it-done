import { TodoFormValues } from "@/types/todoSchema";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TodoStore = {
  selectedDate: string;
  todos: TodoFormValues[];
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

const addTodo = (todo: TodoFormValues) => {
  useTodoStore.setState((state) => ({
    todos: [...state.todos, todo],
  }));
};

export { useTodoStore, setSelectedDate, addTodo };
export type { TodoStore };
