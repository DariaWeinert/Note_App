import { useState } from 'react';
import FormComponent from './FormComponent';
import NoteComponent from './NoteComponent';
import './NoteApp.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleAddNote = (note) => {
    const newNote = {
      title: note.title,
      text: note.text,
      createdDate: new Date().toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' }),
    };
    setNotes([newNote, ...notes]);
    console.log(newNote);
    setIsModalActive(false); 
  };

  const handleDelete = (noteToDelete) => {
    setNotes(notes.filter((note) => note !== noteToDelete));
  };

  return (
    <>
      <body>
        <div className={`container ${isModalActive ? 'modal-active' : ''}`}>
          <div className="form-container">
            <h2 className='heading'>My Notes App</h2>
            <FormComponent handleAddNote={handleAddNote} />
          </div>
          <div className="notes-container">
            {notes.map((note, index) => (
              <NoteComponent key={index} note={note} handleDelete={handleDelete} setIsModalActive={setIsModalActive} />
            ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default App;
