import { useState } from 'react';

const FormComponent = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  
  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  }
  const handleInputChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleAddNoteClick = () => {
    handleAddNote({
        title:noteTitle,
        text:noteText,
    })
    
    setNoteTitle('');
    setNoteText('');
  }

  return (
    <div className='container'>
        <input className='title-input'
        type='text'
        placeholder='Type your title'
        value={noteTitle}
        onChange={handleTitleChange}></input>
      <textarea className='text-input'
        placeholder='Type your note'
        value={noteText}
        onChange={handleInputChange}
        required
      />
      <br />
      <button className='add-note-button' onClick={handleAddNoteClick} disabled={!noteText.trim()}>add to sticker</button>
    </div>
  );
};

export default FormComponent;
