import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const [filter, setFilter] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: todos.length, task: task }]);
    setTask("");
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Adicionar</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;