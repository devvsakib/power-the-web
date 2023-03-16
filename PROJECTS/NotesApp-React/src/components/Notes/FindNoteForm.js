const FindNoteForm = function (props) {
  const { searchValue, onChangeSearchValue } = props;
  return (
    <form className="findNoteForm" action="">
      <input
        value={searchValue}
        onChange={onChangeSearchValue}
        className="findNoteInput"
        placeholder="Find your notes"
        type="text"
      />
    </form>
  );
};

export default FindNoteForm;
