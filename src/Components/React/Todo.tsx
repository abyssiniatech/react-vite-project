import React, { useState } from "react";
import "./styles/Todo.module.css"
// Todo type
type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const TodoApp = (): React.ReactNode => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  // Add Todo
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    setLoading(true);

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setTimeout(() => {
      setLoading(false);
      setTodo("");
    }, 800);
  };

  // Toggle complete
  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete Todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Start editing
  const startEdit = (id: string, title: string) => {
    setEditingId(id);
    setEditText(title);
  };

  // Save edit
  const saveEdit = (id: string) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, title: editText } : t
      )
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6" style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Todo App</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 w-full max-w-md mb-6"
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </form>

      {/* Todos */}
      <div className="w-full max-w-md space-y-3">
        {todos.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between p-3 bg-white shadow rounded-lg"
          >
            {editingId === t.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 p-2 rounded border border-gray-300 mr-2"
                />
                <button
                  onClick={() => saveEdit(t.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span
                  onClick={() => toggleComplete(t.id)}
                  className={`flex-1 cursor-pointer ${
                    t.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {t.title}
                </span>
                <button
                  onClick={() => startEdit(t.id, t.title)}
                  className="px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(t.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
