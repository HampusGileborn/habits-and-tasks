import React, { useState } from 'react'

function NewHabit(props) {
  // const [title, setTitle] = useState('');
  // const [streakValue, setStreakValue] = useState('');
  // const [priority, setPriority] = useState('');
  
  return (

    <div className='formHabit'>
      <p>Create new Habit</p>
      <form action="">
        <p>Habit Title </p>
        <input type="text" value="" placeholder="Title of the Habit"/>
        <div>
        <input type="number" value="" placeholder="Streak of the habit"/>
        </div>
        <select>
          <option value="" disabled hidden>Change Priority</option> 
          <option value="1">Low Priority</option>
          <option value="2">Medium Priority</option>
          <option value="3">High Priority</option>
        </select>
        <button>Add Habit</button>
      </form>
    </div>
  )
}

export default NewHabit;
