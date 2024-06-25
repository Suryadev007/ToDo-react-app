import React from "react";
import { useState } from "react";

function EditTodoForm({ editTodo,task }) {
  const [val, setVal] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(val,task.id);
    setVal("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={val}
        className="todo-input"
        placeholder='Update Task'
        onChange={(e) => setVal(e.target.value)}
      />

      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
}

export default EditTodoForm;
