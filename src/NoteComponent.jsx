import React from 'react';

const NoteComponent = ({ note }) => {
  return (
        <div className='note'>
      <p className='note-text'>{note.text}</p>
      <p className='note-date'>{note.createdDate}</p>
    </div>
  );
};

export default NoteComponent;
