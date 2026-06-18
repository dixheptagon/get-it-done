import { TodoValues } from "@/store/useTodoStore";
import { getStartOfDay } from "./date";

function getTaskProgress(totalTasks: number, totalDoneTasks: number) {
  const percentage =
    totalTasks === 0 ? 0 : Math.round((totalDoneTasks / totalTasks) * 100);

  const taskLeft = totalTasks - totalDoneTasks;

  return {
    percentage: percentage,
    percentageText: `${percentage}% DONE`,
    taskLeftText: `${taskLeft} Task Left`,
  };
}

function removeExpiredTodos(todos: TodoValues[]) {
  const today = getStartOfDay(new Date());

  return todos.filter((todo) => {
    const todoDate = getStartOfDay(new Date(todo.date));

    const diffDays =
      (today.getTime() - todoDate.getTime()) / (1000 * 60 * 60 * 24);

    return diffDays <= 10;
  });
}

export { getTaskProgress, removeExpiredTodos };
