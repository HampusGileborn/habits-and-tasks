import React from "react";
import "../App.css";

function Habits(props) {
  return (
    <>
      {props.habits.map((habits) => (
        <>
        <div className="habitItem">
          <h2>Title: {habits.Title}</h2>
          <h2>Description: {habits.streakValue}</h2>
          <h2>Priority: {habits.priority === 1 ? "Low" : habits.priority === 2 ? "Medium" : "High"}</h2>

          </div>
        </>
      ))}
    </> 
  );
}

export default Habits;
