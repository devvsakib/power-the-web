import AddNote from './AddNote';
import Note from './Note';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className='notes-list container'>
      {notes.length > 0
        ? notes
            .sort((a, b) => b.date - a.date)
            .map((note, i) => (
              <Note
                id={note.id}
                key={i}
                text={note.text}
                date={note.date}
                handleDeleteNote={handleDeleteNote}
              />
            ))
        : null}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
