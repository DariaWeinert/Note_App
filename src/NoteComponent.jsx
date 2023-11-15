import React, { useState } from "react";
import Modal from "./NoteModal.jsx";
import "./NoteApp.css";

const NoteComponent = ({ note, handleDelete }) => {
  const [modalActive, setModalActive] = useState(false);

  const handleNoteDelete = () => {
    if (window.confirm("Are you sure you want to delete this sticker?")) {
      handleDelete(note);
    }
  };

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive} note={note} />

      <div className={`note ${modalActive ? 'inactive' : ''}`} onClick={() => setModalActive(true)}>
        <button className="delete-button" onClick={handleNoteDelete}>
          X
        </button>
        <p className="note-title">{note.title}</p>
        <p className='note-text'>{note.text}</p>
        <p className='note-date'>{note.createdDate}</p>
      </div>
    </>
  );
};

export default NoteComponent;
