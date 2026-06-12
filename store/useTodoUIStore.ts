import { create } from "zustand";
import { TodoValues } from "./useTodoStore";

type TodoUIStore = {
  isTodoFormPanelOpen: boolean;
  isTodoDetailPanelOpen: boolean;
  selectedTodo: TodoValues | null;
};

const useTodoUIStore = create<TodoUIStore>((set) => ({
  isTodoFormPanelOpen: false,
  isTodoDetailPanelOpen: false,
  selectedTodo: null,
}));

const setIsTodoFormPanelOpen = (isTodoFormPanelOpen: boolean) => {
  useTodoUIStore.setState({ isTodoFormPanelOpen });
};

const openTodoDetail = (todo: TodoValues) => {
  useTodoUIStore.setState({
    selectedTodo: todo,
    isTodoDetailPanelOpen: true,
  });
};

const closeTodoDetail = (timeOutDuration = 300) => {
  useTodoUIStore.setState({
    isTodoDetailPanelOpen: false,
  });

  setTimeout(() => {
    useTodoUIStore.setState({
      selectedTodo: null,
    });
  }, timeOutDuration);
};

export {
  useTodoUIStore,
  setIsTodoFormPanelOpen,
  openTodoDetail,
  closeTodoDetail,
};
