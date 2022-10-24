import { useEffect, useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import SearchBar from './components/SearchBar';
import Welcome from './components/Welcome';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );
  const [value, setValue] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toDateString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className='app'>
          <Header />
          <SearchBar value={value} handleChange={handleChange} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(value.toLowerCase())
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      ) : (
        <Welcome />
      )}
    </>
  );
}

export default App;
