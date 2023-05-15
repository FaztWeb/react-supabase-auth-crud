import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TasksList({ done = false }) {
  const { loading, getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks(done);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  function renderTasks() {
    if (loading) {
      return <p>Loading...</p>;
    } else if (tasks.length === 0) {
      return <p>No tasks</p>;
    } else {
      return tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      });
    }
  }

  return <div>{renderTasks()}</div>;
}

export default TasksList;
