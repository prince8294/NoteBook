import React, { useEffect, useState } from 'react';
import './App.css';
import NoteContainer from './Componenets/NoteContainer/NoteCotainer';
import Sidebar from './Componenets/sidebar/Sidebar';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) ||[]);

  const addNote = (color) => {
    const tempNotes = [...notes];
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const day = now.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3);
    const date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

    tempNotes.push({
      id: Date.now(), // Unique identifier for each note
      text: "",
      time: `${time}, ${day} ${date}`,
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex(item => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  useEffect (() =>{
    localStorage.setItem('notes-app',JSON.stringify(notes))
  })
  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
