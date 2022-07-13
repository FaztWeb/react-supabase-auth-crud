import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const { createTask, adding } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(taskName);
      alert("Task created");
      setTaskName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <input
        type="text"
        value={taskName}
        name="taskName"
        onChange={(e) => setTaskName(e.target.value)}
        required
        placeholder="Write a task name"
        className="form-control"
      />
      <div className="bg-dark ms-auto">
        <button disabled={adding} className="btn btn-primary btn-sm">
          {adding ? "Loading..." : "Add"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
