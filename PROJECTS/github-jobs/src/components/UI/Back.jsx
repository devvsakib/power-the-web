import { HiArrowLongLeft } from 'react-icons/hi2';

const Back = (props) => {
  const { goBack } = props;
  return (
    <div
      onClick={() => {
        goBack();
      }}
      className="back"
    >
      <HiArrowLongLeft size={25} className="back__arrow" />
      <p className="back__text">Back to search</p>
    </div>
  );
};

export default Back;
