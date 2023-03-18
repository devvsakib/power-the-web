import Back from '../UI/Back';
const Apply = (props) => {
  const { goBack } = props;
  return (
    <div className="apply">
      <Back goBack={goBack} />
      <h3 className="apply__title">How to Apply</h3>
      <p className="apply__info">
        Please email a copy of your resume and online portfolio to
        wes@kasisto.com & CC eric@kasisto.com
      </p>
    </div>
  );
};

export default Apply;
