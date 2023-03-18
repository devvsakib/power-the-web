import { GiEarthAmerica } from 'react-icons/gi';
import { BiTimeFive } from 'react-icons/bi';
import jobImage from '../../images/not-found.png';
const Job = (props) => {
  const { companyName, jobTitle, option, place, posted, getInfo } = props;
  return (
    <div
      onClick={() => {
        getInfo(props);
      }}
      className="job"
    >
      <div className="job__picture">
        <div className="job__image">
          <img className="job__image-img" src={jobImage} alt="" />
        </div>
      </div>
      <div className="job__about">
        <p className="job__company">{companyName}</p>
        <p className="job__title">{jobTitle}</p>
        <div className="job__info">
          <div className="job__enrollment">{option}</div>
          <div className="job__add-info">
            <div className="job__place">
              <GiEarthAmerica />
              <p className="job__city">{place}</p>
            </div>
            <div className="job__time">
              <BiTimeFive />
              <div className="job__days">{posted} days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
