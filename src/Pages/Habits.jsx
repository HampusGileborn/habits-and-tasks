import React from 'react'
import '../App.css';





function Habits() {

  const arrayAllHabits = allHabits.map((habit) => (
    <li key={habit.Title} className='habitItem'>
      <p>Title: {habit.Title}</p>
      <p>Days done habit: {habit.streakValue} days in a row</p><button> reset streak </button><button> add one</button>
      <p>Priority: {habit.priority}</p>
    </li>
  ));
  
  return (

    <div className='habitPage'>
      <h3>This is a test</h3>
      <p>All Habits</p> 
      <p>Filter</p><select> 
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="">Show All</option>
      </select>
      <ul>{arrayAllHabits}</ul>
    </div>
  )
}

export default Habits;
