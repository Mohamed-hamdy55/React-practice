export default function AllTasks({ todos, deleteTodo, toggleTodo }) {
  return (
    <>
      <div className="bg-secondary-subtle bg-gradient  rounded-5 p-5 container text-center mt-5 mb-5 ">
        {todos.length > 0 ? (
          <>
            {todos.map((todo) => (
              <div
                key={todo.id}
                style={{
                  fontWeight:"bold",
                }}
                className={`rounded-5 mt-3 p-4 bg-mute d-flex justify-content-between ${todo.completed?'bg-success bg-opacity-50 text-black':'bg-dark text-white'} `}
              >
                <p style={{textDecoration: todo.completed ? "line-through" : "none",}} className="text-break">{todo.task}</p>

                <div className="d-flex flex-wrap gap-2">
                    <button onClick={() => toggleTodo(todo.id)} className="btn btn-outline-success fw-bold" style={{width:70,height:40}}>
                    {todo.completed ? "Undo" : "Done"}
                    </button>
                    <button onClick={() => deleteTodo(todo.id)} className="btn btn-outline-danger fw-bold " style={{width:70,height:40}}>
                        Delete
                    </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <h1>Lets Get Some Works Done</h1>
        )}
      </div>
    </>
  );
}
