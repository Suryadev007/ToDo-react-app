import React from "react";
import { useState } from "react";

function TodoForm({ addTodo }) {
 
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    val !== "" ? addTodo(val) || setVal("") : alert("Please enter a task");
    // addTodo(val);
    // setVal("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={val}
        className="todo-input"
        placeholder="Enter The Task"
        onChange={(e) => setVal(e.target.value)}
      />

      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
