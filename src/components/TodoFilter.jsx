function TodoFilter({

  currentFilter,

  setCurrentFilter,

}) {

  return (

    <div className="filter-container">

      <button

        className={
          currentFilter ===
          "all"

            ? "filter-button active-filter"

            : "filter-button"
        }

        onClick={() =>
          setCurrentFilter(
            "all"
          )
        }

      >
        전체
      </button>

      <button

        className={
          currentFilter ===
          "active"

            ? "filter-button active-filter"

            : "filter-button"
        }

        onClick={() =>
          setCurrentFilter(
            "active"
          )
        }

      >
        진행 중
      </button>

      <button

        className={
          currentFilter ===
          "completed"

            ? "filter-button active-filter"

            : "filter-button"
        }

        onClick={() =>
          setCurrentFilter(
            "completed"
          )
        }

      >
        완료
      </button>

    </div>

  );
}

export default TodoFilter;