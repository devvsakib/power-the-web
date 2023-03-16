import Apply from './Apply';
import { GiEarthAmerica } from 'react-icons/gi';
import { BiTimeFive } from 'react-icons/bi';
import jobImg from '../../images/not-found.png';
const Result = (props) => {
  const { companyName, jobTitle, option, place, posted, goBack, description } =
    props;
  return (
    <div className="result">
      <div className="result__container">
        <h1>Github Jobs</h1>
        <div className="result__overview">
          <Apply goBack={goBack} />
          <div className="overview">
            <div className="overview__name">
              <p className="overview__title">{jobTitle}</p>
              <div className="overview__enrollment">{option}</div>
            </div>
            <div className="overview__time">
              <BiTimeFive className="overview__icon" />
              <p className="overview__time-date">{posted} days ago</p>
            </div>
            <div className="overview__company">
              <div className="overview__picture">
                <img src={jobImg} alt="" />
              </div>
              <div className="overview__company-info">
                <p className="overview__company-name">{companyName}</p>
                <div className="overview__place">
                  <GiEarthAmerica className="overview__company-icon" />
                  <p className="overview__place-name">{place}</p>
                </div>
              </div>
            </div>
            <p className="overview__about">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
