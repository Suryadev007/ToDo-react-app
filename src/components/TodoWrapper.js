/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import ToDo from "./ToDo";
import EditTodoForm from "./EditTodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
uuidv4();

function TodoWrapper() {
  // get Task List from local storage
  const getLocalList = () => {
    const list = localStorage.getItem("todos");
    return list ? JSON.parse(list) : [];
  };

  const [todos, setTodos] = useState(getLocalList);
  // add Task to Task lists
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  // To toggle between complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // Remove task from Task lists

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // edit task in Task lists
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  // add Task to local storage
  useEffect(() => {
    console.log(todos.task);
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <div className="TodoWrapper">
      <h1>
        <span>
          <FontAwesomeIcon icon={faClipboardCheck} />
        </span>
        {" To Do "}
      </h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <ToDo
            key={index}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
