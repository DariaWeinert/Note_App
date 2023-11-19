import React, { useState } from 'react';
import FormComponent from './FormComponent';
import NoteComponent from './NoteComponent';
import useLocalStorage from './LocalStorage';
import './NoteApp.css';

const App = () => {
  const [notes, setNotes] = useLocalStorage('notes', []);

  const handleAddNote = (note) => {
    const newNote = {
      title: note.title,
      text: note.text,
      createdDate: new Date().toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' }),
    };
    setNotes([newNote, ...notes]);
    console.log ([newNote, ...notes]);
  };

  const handleDelete = (noteToDelete) => {
    setNotes(notes.filter((note) => note !== noteToDelete));
  };

  const handleEditNote = (originalNote, updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note === originalNote ? { ...note, ...updatedNote } : note
    );
    setNotes(updatedNotes);
    console.log([updatedNotes])
  };

  return (
    <>
      <body>
        <div className="container">
          <div className="form-container">
            <h2 className="heading">My Notes App</h2>
            <FormComponent handleAddNote={handleAddNote} />
          </div>
          <div className="notes-container">
            {notes.map((note, index) => (
              <NoteComponent
                key={index}
                note={note}
                handleDelete={handleDelete}
                handleEditNote={handleEditNote}
              />
            ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default App;

