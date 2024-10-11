import { useState } from "react";

export default function Header({ addTodo }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      let taskValue = e.target.task.value;
      if (taskValue.trim()) {
        addTodo(task);
        setTask("");
      } else {
        setError("Add any task, please");
      }
    }
  };

  return (
    <div className="container-fluid p-5 bg-primary bg-opacity-75 text-white text-end">
      <h1>To-Do App!</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="task" className="fw-bold pb-3 pt-3">
          Add New To-Do
        </label>
        <br />
        <input
          type="text"
          value={task}
          id="task"
          placeholder="Enter New Task"
          className="fw container-fluid form-control "
          onChange={(e) => {
            e.target.value === ""
              ? setError("Add any task, please")
              : setError(null);
            setTask(e.target.value);
          }}
        />
        <div className="error text-start container-fluid">
            <small
            className={`text-danger ${!error ? "visually-hidden" : ""} fw-bold`}
            >
            {error}
            </small> <br/>
        </div>
        <button type="submit" className="btn btn-outline-light mt-3 border">
          Add
        </button>
      </form>
    </div>
  );
}
