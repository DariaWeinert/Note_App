import React from "react";


const NoteComponent = ({ note, handleDelete }) => {
    const handleNoteDelete = () => {
        if (window.confirm("Are you sure you want to delete this sticker?")) {
            handleDelete(note);
        }
    };
  return (
    <div className='note'>
        <button className="delete-button" onClick={handleNoteDelete}>X</button>
      <p className='note-text'>{note.text}</p>
      <p className='note-date'>{note.createdDate}</p>
      
    </div>
  );
};

export default NoteComponent;
