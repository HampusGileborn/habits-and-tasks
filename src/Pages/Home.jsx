import React from "react";

function Home(props) {
  console.log(props.tasks.sort((a, b) => b.id - a.id));
  console.log(props.habits.sort((a, b) => b.id - a.id));

  return (
    <>
      <div>
        <h2>Startsida</h2>
      </div>
      <h2>Tasks</h2>
      <div>
          
        {props.tasks.slice(0, 3).map((task) => (
            <>
            <h2>{task.titel}</h2>
            <h3>{task.description}</h3>
            <h3>{task.time}</h3>
            <h3>{task.type}</h3>
            </>
        ))}
      </div>
      
        <h2>Habits</h2>
      
      <div>
        {props.habits.slice(0, 3).map((habits) => (
          <>
            <h2>{habits.Title}</h2>
            <h3>{habits.streakValue}</h3>
            <h3>{habits.priority}</h3>
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
