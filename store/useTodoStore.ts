import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TodoStore = {
  selectedDate: string;
  todos: Todo[];
};

type Todo = {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  attachmentLink: string;
  isImportant: boolean;
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

const addTodo = (todo: Todo) => {
  useTodoStore.setState((state) => ({
    todos: [...state.todos, todo],
  }));
};

export { useTodoStore, setSelectedDate, addTodo };
export type { TodoStore, Todo };
