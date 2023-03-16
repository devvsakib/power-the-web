import { BsBriefcase } from 'react-icons/bs';
import { useState } from 'react';
const HeaderForm = (props) => {
  const { searchValue } = props;
  const [title, setTitle] = useState('');
  return (
    <div className="headerForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchValue(title);
        }}
        action=""
        className="headerForm__search"
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            searchValue(e.target.value);
          }}
          placeholder="Titles"
          type="text"
          className="headerForm__input"
        />
        <BsBriefcase className="headerForm__icon" />
        <button className="headerForm__button">Search</button>
      </form>
    </div>
  );
};

export default HeaderForm;
