import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from './Pages/Home';
import Tasks from './Pages/Tasks';
import NewTask from './Pages/NewTask';
import Habits from './Pages/Habits';
import NewHabit from './Pages/NewHabit';
import Friends from './Pages/Friends';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Tasks' element={<Tasks/>}/>
        <Route path='/NewTask' element={<NewTask/>}/>
        <Route path='/Habits' element={<Habits/>}/>
        <Route path='/NewHabit' element={<NewHabit/>}/>
        <Route path='/Friends' element={<Friends/>}/>
      </Routes>
    </div>
  );
}

export default App;
