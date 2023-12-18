import React from "react";

function Home(props) {
  console.log(props.tasks.sort((a, b) => b.id - a.id));

  return (
    <>
      <div>
        <h2>Startsida</h2>
      </div>
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
    </>
  );
}

export default Home;
