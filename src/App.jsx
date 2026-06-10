import { useState, useEffect } from "react";

import "./App.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import WeekNavigator from "./components/WeekNavigator";

function App() {

  const [todoItems, setTodoItems] =
    useState(() => {

      const savedTodos =
        localStorage.getItem(
          "todos"
        );

      if (savedTodos) {

        return JSON.parse(
          savedTodos
        );
      }

      return [];
    });

  const [todoText, setTodoText] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [currentFilter,
    setCurrentFilter] =
      useState("all");

  const [selectedDate,
    setSelectedDate] =
      useState(
        new Date()
      );

  const [weekStartDate,
    setWeekStartDate] =
      useState(() => {

        const savedWeek =

          localStorage.getItem(
            "weekStartDate"
          );

        if (
          savedWeek
        ) {

          return new Date(
            savedWeek
          );
        }

        const today =
          new Date();

        const sunday =
          new Date(today);

        sunday.setDate(
          today.getDate()
          - today.getDay()
        );

        return sunday;
      });

  /* =========================
     Todo 저장
     ========================= */

  useEffect(() => {

    localStorage.setItem(

      "todos",

      JSON.stringify(
        todoItems
      )

    );

  }, [todoItems]);

  /* =========================
     주차 저장
     ========================= */

  useEffect(() => {

    localStorage.setItem(

      "weekStartDate",

      weekStartDate
        .toISOString()

    );

  }, [weekStartDate]);

  const addTodo = () => {

    const trimmedText =
      todoText.trim();

    if (trimmedText === "") {

      setMessage(
        "할 일을 입력해주세요."
      );

      return;
    }

    const newTodo = {

      id: Date.now(),

      text: trimmedText,

      completed: false,

      date:
        selectedDate
          .toISOString()
          .split("T")[0],
    };

    setTodoItems([
      ...todoItems,
      newTodo,
    ]);

    setTodoText("");

    setMessage("");
  };

  const deleteTodo = (
    todoId
  ) => {

    setTodoItems(

      todoItems.filter(
        (todo) =>
          todo.id !== todoId
      )

    );
  };

  const toggleTodoComplete = (
    todoId
  ) => {

    setTodoItems(

      todoItems.map(
        (todo) =>

          todo.id === todoId

            ? {
                ...todo,

                completed:
                  !todo.completed,
              }

            : todo
      )

    );
  };

  const updateTodo = (
    todoId,
    newText
  ) => {

    setTodoItems(

      todoItems.map(
        (todo) =>

          todo.id === todoId

            ? {
                ...todo,

                text: newText,
              }

            : todo
      )

    );
  };

  const selectedDateString =

    selectedDate
      .toISOString()
      .split("T")[0];

  const filteredTodos =

    todoItems.filter(
      (todo) => {

        if (
          todo.date !==
          selectedDateString
        ) {

          return false;
        }

        if (
          currentFilter ===
          "active"
        ) {

          return !todo.completed;
        }

        if (
          currentFilter ===
          "completed"
        ) {

          return todo.completed;
        }

        return true;
      }
    );

  return (

    <div className="app-container">

      <h1 className="app-title">
        Todo App
      </h1>

      <WeekNavigator

        weekStartDate={
          weekStartDate
        }

        setWeekStartDate={
          setWeekStartDate
        }

        selectedDate={
          selectedDate
        }

        setSelectedDate={
          setSelectedDate
        }

        todoItems={
          todoItems
        }

      />

      <TodoInput

        todoText={todoText}

        setTodoText={
          setTodoText
        }

        addTodo={addTodo}

      />

      <p className="message-box">
        {message}
      </p>

      <TodoFilter

        currentFilter={
          currentFilter
        }

        setCurrentFilter={
          setCurrentFilter
        }

      />

      <TodoList

        todoItems={
          filteredTodos
        }

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

    </div>

  );
}

export default App;