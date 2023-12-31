import React, { useState } from 'react'

function NewTask(props) {

const [titel, setTitel] = useState("");
const [description, setDescription] = useState("");
const [time, setTime] = useState("");
const [type, setType] = useState("");

  return (
    <>
    <div>
        <h2>Lägg till ny Task</h2>
    </div>
    <div>
        <input type="text" value={titel} onChange={(e) => setTitel(e.target.value)} placeholder='Titel'/>
        <button onClick={async () => {
            let response= await fetch("https://www.boredapi.com/api/activity");
            let json = await response.json();
            setTitel(json.activity);
        }

        }>Random Task</button>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description'/>
        <input type="number" value={time} onChange={(e) => setTime(e.target.value)} placeholder='time'/>
        <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="none">Välj kategori</option>
            <option value="Hushållssysslor">Hushållssysslor</option>
            <option value="Aktivitet">Aktivitet</option>
            <option value="Plugg">Plugg</option>
        </select>
    </div>
    <div>
        <button onClick={() => {
            const uppdated = props.tasks;
            uppdated.push({id: uppdated.length + 1 , titel, description, time, type, done: false});
            props.setTasks(uppdated);
            setTitel("");
            setDescription("");
            setTime("");
            setType("none");
        }}>Lägg till task</button>
    </div>
    </>
  )
}

export default NewTask;

