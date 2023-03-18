import Note from './Note';
const Notes = function (props) {
  const { notes, deleteNote, changePage, changeInfo, searchValue } = props;
  return (
    <div className="notes">
      {notes
        .filter((note) => {
          const title = note.title.toLowerCase();
          return title.includes(searchValue);
        })
        .map((note) => {
          return (
            <Note
              changeInfo={changeInfo}
              changePage={changePage}
              deleteNote={deleteNote}
              date={note.date}
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
            />
          );
        })}
    </div>
  );
};
export default Notes;
