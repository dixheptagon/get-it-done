import { create } from "zustand";

type TodoUIStore = {
  isTodoFormPanelOpen: boolean;
};

const useTodoUIStore = create<TodoUIStore>((set) => ({
  isTodoFormPanelOpen: false,
}));

const setIsTodoFormPanelOpen = (isTodoFormPanelOpen: boolean) => {
  useTodoUIStore.setState({ isTodoFormPanelOpen });
  console.log(isTodoFormPanelOpen);
};

export { useTodoUIStore, setIsTodoFormPanelOpen };
