import React from "react";
import "../App.css";

function Habits(props) {
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
      {props.habits.map((habits) => (
        <>
          <div key={habits.id} className="habitItem">
            <h2>{habits.Title}</h2>
            <h2>Streak: {habits.streakValue} days in a row</h2>
            <button onClick={() => decreaseStreak(habits.id)}>-1</button>
            <button onClick={() => resetStreak(habits.id)}>Reset</button>
            <button onClick={() => increaseStreak(habits.id)}>+1</button>

            <h2>
              {" "}
              {habits.priority === 1
                ? "Low"
                : habits.priority === 2
                ? "Medium"
                : "High"}{" "}
              Priority
            </h2>
          </div>
        </>
      ))}
    </>
  );
}

export default Habits;
