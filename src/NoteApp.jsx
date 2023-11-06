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
    setNotes([...notes, newNote]);
    console.log (newNote);
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
          <NoteComponent key={index} note={note} />
        ))}
      </div>
    </div>
    </body>
    </>
  );
};

export default App;
