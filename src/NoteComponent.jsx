
import React, { useState } from "react";
import Modal from "./NoteModal.jsx";

const NoteComponent = ({ note, handleDelete, handleEditNote }) => {
  const [modalActive, setModalActive] = useState(false);

  const handleNoteDelete = () => {
    if (window.confirm("Are you sure you want to delete this sticker?")) {
      handleDelete(note);
    }
  };

  const handleNoteClick = (e) => {
    if (!e.target.classList.contains("delete-button")) {
      setModalActive(true);
    }
  };

  const handleSaveNote = (editedNote) => {
    handleEditNote(note, editedNote);
    setModalActive(false);
  };

  

  return (
    <>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        note={note}
        handleSaveNote={handleSaveNote}
      />

<div className={`note ${modalActive ? "inactive" : ""}`} onClick={handleNoteClick}>
        <button className="delete-button" onClick={handleNoteDelete}>
          X
        </button>
        <p className="note-title">{note.title}</p>
        <p className="note-text">{note.text}</p>
        <p className="note-date">{note.createdDate}</p>
      </div>
    </>
  );
};

export default NoteComponent;
