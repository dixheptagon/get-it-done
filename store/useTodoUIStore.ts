import { create } from "zustand";
import { TodoValues } from "./useTodoStore";

type TodoUIStore = {
  isTodoFormPanelOpen: boolean;
  isTodoDetailPanelOpen: boolean;
  selectedTodoId: string | null;
};

const useTodoUIStore = create<TodoUIStore>((set) => ({
  isTodoFormPanelOpen: false,
  isTodoDetailPanelOpen: false,
  selectedTodoId: null,
}));

const setIsTodoFormPanelOpen = (isTodoFormPanelOpen: boolean) => {
  useTodoUIStore.setState({ isTodoFormPanelOpen, selectedTodoId: null });
};

const openTodoDetail = (todoId: string) => {
  useTodoUIStore.setState({
    selectedTodoId: todoId,
    isTodoDetailPanelOpen: true,
  });
};

const closeTodoDetail = (timeOutDuration = 300) => {
  useTodoUIStore.setState({
    isTodoDetailPanelOpen: false,
  });

  setTimeout(() => {
    useTodoUIStore.setState({
      selectedTodoId: null,
    });
  }, timeOutDuration);
};

const editTodo = (todoId: string) => {
  useTodoUIStore.setState({
    selectedTodoId: todoId,
    isTodoDetailPanelOpen: false,
    isTodoFormPanelOpen: true,
  });
};

export {
  useTodoUIStore,
  setIsTodoFormPanelOpen,
  openTodoDetail,
  closeTodoDetail,
  editTodo,
};
