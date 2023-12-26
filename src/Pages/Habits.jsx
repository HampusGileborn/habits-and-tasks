import React, { useState } from "react";
import "../App.css";

function Habits(props) {
  const [sortType, setSortType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const sortedAndFilterHabits = () => {
    let filteredHabits = [...props.habits];

    if (sortType === "streakValueAsc") {
    filteredHabits.sort((a, b) => a.streakValue - b.streakValue);
    } else if (sortType === "streakValueDesc") {
      filteredHabits.sort((a, b) => b.streakValue - a.streakValue);
    } else if (sortType === "priorityAsc") {
      filteredHabits.sort((a, b) => a.priority - b.priority);
    } else if (sortType === "priorityDesc") {
      filteredHabits.sort((a, b) => b.priority - a.priority);
    }
    if (filterCategory !== "") {
      if (filterCategory !== "Show All") {
      filteredHabits = filteredHabits.filter(
        (habit) => habit.priority === filterCategory
      );
      }
    }
    return filteredHabits;    
  }
  const handleSortChange = (e) => {
    const selectedSortType = e.target.value;
    setSortType(selectedSortType);
  };
  const handleFilterClick = (category) => {
    setFilterCategory(category);
  };


  const increaseStreak = (id) => {
    const updatedHabits = props.habits.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          streakValue: habit.streakValue + 1,
        };
      }
      return habit;
    });
    props.setHabits(updatedHabits);
  };

  const decreaseStreak = (id) => {
    const updatedHabits = props.habits.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          streakValue: habit.streakValue - 1,
        };
      }
      return habit;
    });
    props.setHabits(updatedHabits);
  };

  const resetStreak = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to reset your streak? This cannot be undone."
    );
    if (confirmed) {
      const updatedHabits = props.habits.map((habit) => {
        if (habit.id === id) {
          return {
            ...habit,
            streakValue: 0,
          };
        }
        return habit;
      });
      props.setHabits(updatedHabits);
    }
  };

  return (
    <>
    <div className="habitsContainer">
    <div className="sortAndFilterSection">
    <div>
      <p>Sort by:</p>
      <select value={sortType} onChange={handleSortChange}>
        {/* <option value="">Sort by (standard)</option> */}
        <option value="streakValueAsc">Streak (Low to High)</option>
        <option value="streakValueDesc">Streak (High to Low)</option>
        <option value="priorityAsc">Priority (Low to High)</option>
        <option value="priorityDesc">Priority (High to Low)</option>
      </select>
    </div>
    <div>
      <ul className="filterList">
        <li>Priority Filter</li>
        <li className="filterItem"><a href="#filter.all" onClick={ () => handleFilterClick ("")}>Show All</a></li>
        <li className="filterItem"><a href="#filter.low" onClick={ () => handleFilterClick(1)}>Low</a></li>
        <li className="filterItem"><a href="#filter.medium" onClick={ () => handleFilterClick(2)}>Medium</a></li>
        <li className="filterItem"><a href="#filter.high" onClick={ () => handleFilterClick (3)}>High</a></li>
      </ul>
    </div>
    </div>
    <div className="habitSection">
    <div>
      {/* <h2 className="habitTitle">Your Habits:</h2> */}
    </div>
      {sortedAndFilterHabits().map((habits) => (
        <div key={habits.id} className="habitItem">
          <h2>{habits.Title}</h2>
          <h2>Streak: {habits.streakValue} days in a row</h2>
          <button onClick={() => decreaseStreak(habits.id)}>-1</button>
          <button onClick={() => resetStreak(habits.id)}>Reset</button>
          <button onClick={() => increaseStreak(habits.id)}>+1</button>
          <h2>
            Priority:{" "}
            {habits.priority === 1
              ? "Low"
              : habits.priority === 2
              ? "Medium"
              : "High"}
          </h2>
        </div>
      ))}
      </div>
      </div>
    </>
  );
}

export default Habits;
