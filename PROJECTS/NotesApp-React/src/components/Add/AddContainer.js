import AddNote from './AddNote';
import Back from '../UI/Back';
const AddContainer = function (props) {
  const { page, changePage, addNote, info } = props;
  return (
    <div className="AddContainer">
      <div className="AddContainer__header">
        <Back info={info} addNote={addNote} changePage={changePage} />
        <p className="AddContainer__title">Untitled</p>
      </div>
      <AddNote
        info={info}
        addNote={addNote}
        page={page}
        changePage={changePage}
      />
    </div>
  );
};

export default AddContainer;
