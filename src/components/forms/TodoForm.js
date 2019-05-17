import React from "react";

function TodoForm({ addTodo }: Function) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (event: Object) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="add new todo"
      />
    </form>
  );
}

export default TodoForm;
