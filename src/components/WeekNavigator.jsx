function WeekNavigator({

  weekStartDate,

  setWeekStartDate,

  selectedDate,

  setSelectedDate,

  todoItems,

}) {

  const dayNames = [
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
  ];

  const movePreviousWeek =
    () => {

      const newWeek =
        new Date(
          weekStartDate
        );

      newWeek.setDate(
        newWeek.getDate() - 7
      );

      setWeekStartDate(
        newWeek
      );
    };

  const moveNextWeek =
    () => {

      const newWeek =
        new Date(
          weekStartDate
        );

      newWeek.setDate(
        newWeek.getDate() + 7
      );

      setWeekStartDate(
        newWeek
      );
    };

  const weekDates = [];

  for (
    let i = 0;
    i < 7;
    i++
  ) {

    const date =
      new Date(
        weekStartDate
      );

    date.setDate(
      weekStartDate.getDate()
      + i
    );

    weekDates.push(date);
  }

  const todayString =
    new Date()
      .toISOString()
      .split("T")[0];

  return (

    <>

      <div className="week-navigation-container">

        <button

          className="
            week-navigation-button
          "

          onClick={
            movePreviousWeek
          }

        >
          ◀ 이전 주
        </button>

        <h2
          className="
            week-range-text
          "
        >

          {
            weekDates[0]
              .toISOString()
              .split("T")[0]
          }

          {" ~ "}

          {
            weekDates[6]
              .toISOString()
              .split("T")[0]
          }

        </h2>

        <button

          className="
            week-navigation-button
          "

          onClick={
            moveNextWeek
          }

        >
          다음 주 ▶
        </button>

      </div>

      <div
        className="
          week-dates-container
        "
      >

        {weekDates.map(
          (
            date
          ) => {

            const dateString =

              date
                .toISOString()
                .split("T")[0];

            const todoCount =

              todoItems.filter(
                (todo) =>

                  todo.date ===
                  dateString

              ).length;

            return (

              <div

                key={dateString}

                className={`
                  week-date-card

                  ${
                    selectedDate
                      .toISOString()
                      .split("T")[0]
                    === dateString
                      ? "selected-date-card"
                      : ""
                  }

                  ${
                    todayString
                    === dateString
                      ? "today-date-card"
                      : ""
                  }
                `}

                onClick={() =>
                  setSelectedDate(
                    date
                  )
                }

              >

                <div className="week-day-name">
                  {
                    dayNames[
                      date.getDay()
                    ]
                  }
                </div>

                <div className="week-day-number">
                  {
                    date.getDate()
                  }
                </div>

                <div className="week-todo-count">
                  {todoCount}개
                </div>

              </div>

            );
          }
        )}

      </div>

    </>

  );
}

export default WeekNavigator;