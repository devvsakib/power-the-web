import { ImPencil } from 'react-icons/im';
import { BsPlus } from 'react-icons/bs';
const Button = function (props) {
  const { page, changePage, addNote, data } = props;
  return (
    <button
      onClick={() => {
        changePage();
        addNote?.(data[0], data[1]);
      }}
      className="btn"
    >
      {page === 0 ? <ImPencil size={20} /> : <BsPlus size={40} />}
    </button>
  );
};
export default Button;
