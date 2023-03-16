import './App.css';
import nextId from 'react-id-generator';
import NotesContainer from './components/Notes/NotesContainer';
import AddContainer from './components/Add/AddContainer';
import { useState } from 'react';
function App() {
  const [page, setPage] = useState(0);
  const [notes, setNotes] = useState([]);
  const [info, setInfo] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  function generateDateString() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const addNote = (title, content) => {
    setNotes([
      ...notes,
      {
        title: title,
        content: content,
        id: nextId(),
        date: generateDateString(),
      },
    ]);
    // add note to local storage
  };
  const changePage = () => {
    page === 0 ? setPage(1) : setPage(0);
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const changeInfo = (title, content) => {
    setInfo([title, content]);
    setTimeout(() => setInfo([]), 1000);
  };
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="App">
      {page === 0 ? (
        <NotesContainer
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          deleteNote={deleteNote}
          notes={notes}
          changePage={changePage}
          page={page}
          changeInfo={changeInfo}
        />
      ) : (
        <AddContainer
          info={info}
          addNote={addNote}
          changePage={changePage}
          page={page}
        />
      )}
    </div>
  );
}

export default App;
