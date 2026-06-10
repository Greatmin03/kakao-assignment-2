function DateNavigator({

  selectedDate,

  setSelectedDate,

}) {

  /* =========================
     이전 날짜 이동
     ========================= */

  const movePreviousDay =
    () => {

      const newDate =
        new Date(
          selectedDate
        );

      newDate.setDate(
        newDate.getDate() - 1
      );

      setSelectedDate(
        newDate
      );
    };

  /* =========================
     다음 날짜 이동
     ========================= */

  const moveNextDay =
    () => {

      const newDate =
        new Date(
          selectedDate
        );

      newDate.setDate(
        newDate.getDate() + 1
      );

      setSelectedDate(
        newDate
      );
    };

  return (

    <div className="date-container">

      <button

        className="date-button"

        onClick={
          movePreviousDay
        }

      >
        ◀
      </button>

      <h2 className="date-text">

        {
          selectedDate
            .toISOString()
            .split("T")[0]
        }

      </h2>

      <button

        className="date-button"

        onClick={
          moveNextDay
        }

      >
        ▶
      </button>

    </div>

  );
}

export default DateNavigator;