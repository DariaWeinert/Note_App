import React, { useState, useEffect } from "react";
import "./NoteModal.css";
import "./NoteApp.css"

const Modal = ({ active, setActive, note, handleEditNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedText, setEditedText] = useState(note.text);

  useEffect(() => {
    setIsEditing(true);
  }, [active]);

  const handleSave = () => {
    handleEditNote(note, { title: editedTitle, text: editedText });
    setIsEditing(false);
  };

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <>
          <input
            className="title-input'"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className='note-text'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <p className='note-date'>{note.createdDate}</p>
          <div className='btn-box'>
          <button className="save-note-button" onClick={handleSave}>Save</button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Modal;
