import { BiArrowToLeft } from 'react-icons/bi';
import classes from './Back.module.css';
const Back = function (props) {
  const { changePage, addNote } = props;
  return (
    <BiArrowToLeft
      className={classes.backBtn}
      onClick={() => {
        changePage();
        addNote?.(
          JSON.parse(localStorage.getItem('data'))[0],
          JSON.parse(localStorage.getItem('data'))[1]
        );
      }}
      size="30"
    />
  );
};
export default Back;
