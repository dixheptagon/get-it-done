import { formatDateToString } from "@/lib/dateFormatter";
import { removeExpiredTodos } from "@/lib/taskFormatter";
import { TodoFormValues } from "@/types/todoSchema";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TodoValues = TodoFormValues & {
  id: string;
  isDone: boolean;
};

type TodoStore = {
  selectedDate: string;
  todos: TodoValues[];
};

const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      selectedDate: formatDateToString(new Date()),

      todos: [],
    }),
    {
      name: "todo-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ todos: state.todos }),

      onRehydrateStorage: () => (state) => {
        if (!state) return;

        state.todos = removeExpiredTodos(state.todos);
      },
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

const toggleTodoDone = (id: string | undefined) => {
  if (!id) return;

  useTodoStore.setState((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    ),
  }));
};

const deleteTodo = (id: string | undefined) => {
  if (!id) return;

  useTodoStore.setState((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  }));
};

const updateTodo = (newTodo: TodoValues) => {
  if (!newTodo.id) return;

  useTodoStore.setState((state) => ({
    todos: state.todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo)),
  }));
};

export {
  useTodoStore,
  setSelectedDate,
  addTodo,
  toggleTodoDone,
  deleteTodo,
  updateTodo,
};
export type { TodoStore, TodoValues };
