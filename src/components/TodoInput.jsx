function TodoInput({

  todoText,

  setTodoText,

  addTodo,

}) {

  return (

    <div className="todo-input-container">

      <input

        type="text"

        value={todoText}

        placeholder="할 일을 입력하세요..."

        onChange={(event) =>

          setTodoText(
            event.target.value
          )

        }

        onKeyDown={(event) => {

          if (
            event.key === "Enter"
          ) {

            addTodo();
          }
        }}

      />

      <button
        onClick={addTodo}
      >
        추가
      </button>

    </div>

  );
}

export default TodoInput;