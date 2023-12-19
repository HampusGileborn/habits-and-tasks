import React from "react";
import "../App.css";




function Habits(props) {
  
  return (
    
    <>
      {props.habits.map((habits) => (
        <>
        <div className="habitItem">
          <h2>Title: {habits.Title}</h2>
          <h2>Streak: {habits.streakValue} days in a row</h2> 
          <button>-1</button>
          <button>Reset</button>
          <button>+1</button>
          <h2>Priority: {habits.priority === 1 ? "Low" : habits.priority === 2 ? "Medium" : "High"}</h2>

          </div>
        </>
      ))}
    </> 
  );

}

export default Habits;
