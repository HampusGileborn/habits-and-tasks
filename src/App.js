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
import EditTask from "./Pages/EditTask";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      titel: "Städa",
      description: "plocka undan kläder och damsug",
      time: 30,
      type: "hushållssysslor",
      done: false,
    },
    {
      id: 2,
      titel: "Träna",
      description: "Gå till gymmet och kör ben",
      time: 100,
      type: "aktivitet",
      done: false,
    },
    {
      id: 3,
      titel: "Plugga",
      description: "Kolla på YouTube",
      time: 2,
      type: "plugg",
      done: true,
    },
  ]);
  
  const [habits, setHabits] = useState([
    {
      id: 1,
      Title: "Borsta tänderna",
      streakValue: 123,
      priority: 3,
    },
    {
      id: 2,
      Title: "Bädda sängen",
      streakValue: 0,
      priority: 2,
    },
    {
      id: 3,
      Title: "Plugga",
      streakValue: 0,
      priority: 1,
    },
  ]);
  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} habits={habits} />} />
        <Route path="/Tasks" element={<Tasks tasks={tasks} setTasks={setTasks}/>} />
        <Route
          path="/NewTask"
          element={<NewTask tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/Habits" element={<Habits habits={habits} setHabits={setHabits}/>} />
        <Route
          path="/NewHabit"
          element={<NewHabit addHabit={addHabit}/>}
        />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/EditTask/:id" element={<EditTask tasks={tasks} setTasks={setTasks}/>} />
      </Routes>
    </div>
  );
}

export default App;
