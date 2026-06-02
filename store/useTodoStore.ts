import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TodoStore = {
  selectedDate: string;
};

const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      selectedDate: new Date().toISOString().split("T")[0],
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

export { useTodoStore, setSelectedDate };
