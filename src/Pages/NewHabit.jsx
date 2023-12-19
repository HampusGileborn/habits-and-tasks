import React, { useState } from "react";

function NewHabit(props) {
  const [title, setTitle] = useState('');
  const [streakValue, setStreakValue] = useState('');
  const [priority, setPriority] = useState('');
  
  const handleAddHabit = () => {
    if (title && streakValue && priority) {
      const newHabit = {
        Title: title,
        streakValue: parseInt(streakValue),
        priority: parseInt(priority)
      };

      props.addHabit(newHabit);
      setTitle('');
      setStreakValue('');
      setPriority('');
    } else {
      alert('Please fill all the fields');
    }
  };

  return (

    <div className="formHabit">
      <div>
      <p>Create new Habit</p>
      </div>
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title of the Habit" />
        <input type="number" value={streakValue} onChange={(e) => setStreakValue(e.target.value)} placeholder="Streak of the habit" />
       <select name="priority" value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="" hidden disabled>Select Priority</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
        <button onClick={handleAddHabit}>Add Habit</button>
    </div>
      </div>
  );
}

export default NewHabit;
