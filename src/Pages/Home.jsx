import React from "react";

function Home(props) {
  console.log(props.tasks.sort((a, b) => b.id - a.id));
  console.log(props.habits.sort((a, b) => b.id - a.id));

  return (
    <>
      <div>
        <h2>Startsida</h2>
      </div>
      <div className="lists">
        <div className="listHome">
          <h2>Tasks</h2>
          <div>
            {props.tasks.slice(0, 3).map((task) => (
              <div key={task.id} className="listItem">
                <h2>{task.titel}</h2>
                <h3>{task.description}</h3>
                <h3>{task.time}</h3>
                <h3>{task.type}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="listHome">
          <h2>Habits</h2>
          <div>
            {props.habits.slice(0, 3).map((habits) => (
              <div className="listItem" key={habits.id}>
                <h2>Title: {habits.Title}</h2>
                <h3>Streak: {habits.streakValue} days</h3>
                <h3>
                  Priority:{" "}
                  {habits.priority === 1
                    ? "Low"
                    : habits.priority === 2
                    ? "Medium"
                    : "High"}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
