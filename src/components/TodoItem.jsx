import { useState } from "react";

function TodoItem({

  todo,

  deleteTodo,

  updateTodo,

  toggleTodoComplete,

}) {

  /* =========================
     수정 모드
     ========================= */

  const [isEditing, setIsEditing] =
    useState(false);

  /* =========================
     수정 입력값
     ========================= */

  const [editText, setEditText] =
    useState(todo.text);

  /* =========================
     수정 저장
     ========================= */

  const saveEdit = () => {

    const trimmedText =
      editText.trim();

    if (
      trimmedText === ""
    ) {

      return;
    }

    updateTodo(

      todo.id,

      trimmedText

    );

    setIsEditing(false);
  };

  return (

    <li className="todo-item">

      {/* =====================
          Todo 내용
         ===================== */}

      <div className="todo-content">

        {isEditing ? (

          <input

            className="edit-input"

            value={editText}

            onChange={(event) =>

              setEditText(
                event.target.value
              )

            }

          />

        ) : (

          <span

            className={`todo-text ${
              todo.completed
                ? "completed"
                : ""
            }`}

          >

            {todo.text}

          </span>

        )}

      </div>

      {/* =====================
          버튼 영역
         ===================== */}

      <div className="todo-actions">

        {isEditing ? (

          <button

            className="
              action-button
              edit-button
            "

            onClick={saveEdit}

          >
            저장
          </button>

        ) : (

          <button

            className="
              action-button
              edit-button
            "

            onClick={() =>

              setIsEditing(true)

            }

          >
            수정
          </button>

        )}

        <button

          className="
            action-button
            complete-button
          "

          onClick={() =>

            toggleTodoComplete(
              todo.id
            )

          }

        >

          {todo.completed
            ? "취소"
            : "완료"}

        </button>

        <button

          className="
            action-button
            delete-button
          "

          onClick={() =>

            deleteTodo(
              todo.id
            )

          }

        >

          삭제

        </button>

      </div>

    </li>

  );
}

export default TodoItem;