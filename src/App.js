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
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      {
        id: 1,
        titel: "Städa",
        description: "plocka undan kläder och damsug",
        time: 30 + " minuter",
        type: "hushållssysslor",
      },
      {
        id: 2,
        titel: "Träna",
        description: "Gå till gymmet och kör ben",
        time: 100 + " minuter",
        type: "aktivitet",
      },
      {
        id: 3,
        titel: "Plugga",
        description: "Kolla på YouTube",
        time: 2 + " minuter",
        type: "plugg",
      }
    ]);
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home tasks={tasks}/>} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/NewTask" element={<NewTask tasks={tasks} setTasks={setTasks}/>} />
        <Route path="/Habits" element={<Habits />} />
        <Route path="/NewHabit" element={<NewHabit />} />
        <Route path="/Friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
