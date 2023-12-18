import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import NewTask from "./Pages/NewTask";
import Habits from "./Pages/Habits";
import NewHabit from "./Pages/NewHabit";
import Friends from "./Pages/Friends";
import { useEffect, useState } from "react";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      titel: "Städa",
      description: "plocka undan kläder och damsug",
      time: "30 minuter",
      type: "hushållssysslor",
    },
    {
      id: 2,
      titel: "Träna",
      description: "Gå till gymmet och kör ben",
      time: "100 minuter",
      type: "aktivitet",
    },
    {
      id: 3,
      titel: "Plugga",
      description: "Kolla på YouTube",
      time: "2 minuter",
      type: "plugg",
    },
  ]);
  
  const [habits, setHabits] = useState([
    {
      id: 1,
      Title: "Borsta tänderna",
      streakValue: 123,
      priority: "High",
    },
    {
      id: 2,
      Title: "Bädda sängen",
      streakValue: 0,
      priority: "Medium",
    },
    {
      id: 3,
      Title: "Plugga",
      streakValue: 0,
      priority: "Low",
    },
  ]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} habits={habits} />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route
          path="/NewTask"
          element={<NewTask tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/Habits" element={<Habits habits={habits} />} />
        <Route
          path="/NewHabit"
          element={<NewHabit habits={habits} setHabits={setHabits} />}
        />
        <Route path="/Friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
