import React from "react";
import Note from "../Notebook/Note";

import "./NoteCotainer.css";
const NoteCotainer = (props) => {
  const recerArray = (arr)=>{
    const array = []
    for(let i=arr.length-1; i>=0; --i){
      array.push(arr[i])
    }
    return array
  }
  const notes = recerArray(props.notes)
  return (
    <div className="note-container">
      <h2 className="MYBOOK">MY BOOK</h2>
      <div className="note-cotainer_notes custom-scroll">
        {
            notes?.length>0?notes.map((item,index) =><Note
           note={item}
           key={item.id}
           deleteNote = {props.deleteNote}
          />):<h2>No Notes This Time</h2>
        }
      </div>
    </div>
  );
};

export default NoteCotainer;
