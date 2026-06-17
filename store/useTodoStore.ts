import { formatDateToString } from "@/lib/dateFormatter";
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
  getSelectedDateTodos: () => TodoValues[];
};

const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      selectedDate: formatDateToString(new Date()),

      todos: [],

      getSelectedDateTodos: () => {
        const targetDate = get().selectedDate;
        return get().todos.filter(
          (todo) =>
            todo.startTime.slice(0, 10) === targetDate &&
            todo.endTime.slice(0, 10) === targetDate,
        );
      },
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

export { useTodoStore, setSelectedDate, addTodo, toggleTodoDone, deleteTodo };
export type { TodoStore, TodoValues };
