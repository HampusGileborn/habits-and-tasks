import React from 'react'

function NewHabit(props) {
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
          <option value="Low Priority">Low Priority</option>
          <option value="Medium Priority">Medium Priority</option>
          <option value="High Priority">High Priority</option>
        </select>
        <button>Add Habit</button>
      </form>
    </div>
  )
}

export default NewHabit;
