import { useState } from 'react';

const FormComponent = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleInputChange = (event) => {
    setNoteText(event.target.value);
  };

  return (
    <div className='container'>
      <textarea className='text-input'
        placeholder='Type your note'
        value={noteText}
        onChange={handleInputChange}
      />
      <br />
      <button className='add-note-button' onClick={() => handleAddNote(noteText)}>add to sticker</button>
    </div>
  );
};

export default FormComponent;
