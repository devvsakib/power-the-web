import React from 'react';

const Loader = () => {
  return <div className='loader'></div>;
};

const Welcome = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        style={{ width: '50%', maxWidth: '180px' }}
        src='./images/welcome.svg'
        alt='welcome'
      />
      <h1>Notes App</h1>
      <Loader />
    </div>
  );
};

export default Welcome;
