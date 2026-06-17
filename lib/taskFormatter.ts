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

export { getTaskProgress };
