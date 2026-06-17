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
  useTodoUIStore.setState({ isTodoFormPanelOpen });
};

const openTodoDetail = (todoId: TodoValues) => {
  useTodoUIStore.setState({
    selectedTodoId: todoId.id,
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

export {
  useTodoUIStore,
  setIsTodoFormPanelOpen,
  openTodoDetail,
  closeTodoDetail,
};
