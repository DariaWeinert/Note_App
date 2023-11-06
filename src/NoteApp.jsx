import { useState } from 'react';
import FormComponent from './FormComponent';
import NoteComponent from './NoteComponent';
import './NoteApp.css'

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (text) => {
    const newNote = {
      text: text,
      createdDate: new Date().toLocaleString('en-GB', {dateStyle: 'short', timeStyle: 'short' }),
    };
    setNotes([newNote, ...notes]);
    console.log (newNote);
  };
  const handleDelete = (noteToDelete) => {
    setNotes(notes.filter((note) => note !== noteToDelete));
  };
  return (
    <>
    <body>
    <div className="container">
      <div className="form-container">
      <h2 className='heading'>My Notes App</h2>
        <FormComponent handleAddNote={handleAddNote} />
      </div>
      <div className="notes-container">
        {notes.map((note, index) => (
          <NoteComponent key={index} note={note} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
    </body>
    </>
  );
};

export default App;
