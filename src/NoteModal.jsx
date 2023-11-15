import React from "react";
import "./NoteModal.css";

const Modal = ({ active, setActive, note }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p className="note-title">{note.title}</p>
        <p className='note-text'>{note.text}</p>
        <p className='note-date'>{note.createdDate}</p>
      </div>
    </div>
  );
};

export default Modal;
