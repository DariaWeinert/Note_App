import React, { useState, useEffect } from "react";
import "./NoteModal.css";
import "./NoteApp.css"

const Modal = ({ active, setActive, note, handleSaveNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedText, setEditedText] = useState(note.text);

  useEffect(() => {
    setIsEditing(active);
  }, [active]);

  const handleSave = () => {
    const currentDate = new Date().toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' });
  
    handleSaveNote({
      title: editedTitle,
      text: editedText,
      updatedDate: currentDate,
    });
    setIsEditing(false);
  };

  useEffect(() => {
    if (!active) {
      setEditedTitle(note.title);
      setEditedText(note.text);
    }
  }, [active, note]);

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <>
          <input
            className="title-edit"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="note-text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <p className="note-date">{note.createdDate}</p>
          <div className="btn-box">
            <button className="save-note-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Modal;
