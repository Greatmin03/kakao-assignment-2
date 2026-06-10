import TodoItem from "./TodoItem";

function TodoList({

  todoItems,

  deleteTodo,

  updateTodo,

  toggleTodoComplete,

}) {

  return (

    <ul className="todo-list">

      {todoItems.map(
        (todo) => (

          <TodoItem

            key={todo.id}

            todo={todo}

            deleteTodo={
              deleteTodo
            }

            updateTodo={
              updateTodo
            }

            toggleTodoComplete={
              toggleTodoComplete
            }

          />

        )
      )}

    </ul>

  );
}

export default TodoList;