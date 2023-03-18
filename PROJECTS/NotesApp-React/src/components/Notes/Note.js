const Note = function (props) {
  const { title, date, id, deleteNote, changePage, changeInfo, content } =
    props;
  return (
    <div
      onClick={() => {
        deleteNote(id);
        changeInfo(title, content);
        changePage();
      }}
      className="note"
    >
      <p className="note__name">{title !== '' ? title : 'Untitled'}</p>
      <p className="note__date">{date}</p>
    </div>
  );
};

export default Note;
