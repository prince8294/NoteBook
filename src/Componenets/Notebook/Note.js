import React, { useEffect, useState } from 'react';
import './Note.css';
import { icon } from "../../Componenets/icon/icon";

const Note = (props) => {
  const [text, setText] = useState(props.note.text);

  useEffect(() => {
    const savedText = localStorage.getItem(`note-${props.note.id}`);
    if (savedText) {
      setText(savedText);
    }
  }, [props.note.id]);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    localStorage.setItem(`note-${props.note.id}`, newText);
  };

  return (
    <div className='note' style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        value={text}
        onChange={handleTextChange}
      />
      <p>{props.note.time}</p>
      <div className='note_foter'>
        <p>{props.note.item}</p>
        <img src={icon.Delete_icon} alt="Delete" onClick={() => props.deleteNote(props.note.id)} />
      </div>
    </div>
  );
};

export default Note;
