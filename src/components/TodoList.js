import React from "react";
import "./styles/todo-list-styles.css";
import TodoForm from "./forms/TodoForm";

const Todo = ({ todo, index, completeTodo, removeTodo }: Object) => (
  <div
    className="todo"
    style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
  >
    <button className="button-as-text" onClick={() => completeTodo(index)}>
      {todo.text}
    </button>
    <div>
      <button onClick={() => removeTodo(index)}>x</button>
    </div>
  </div>
);

function TodoList() {
  const [todos, setTodos] = React.useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friend", isCompleted: false },
    { text: "Build really  cool app", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </>
  );
}

export default TodoList;
