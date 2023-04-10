import { React } from 'react';

const NotFound = () => {
  return (
    <div className='flex flex-grid  my-auto'>
        <div className='flex flex-col lg:flex-row p-6 w-full justify-center h-[100vh]'>
          <img src="images/404.svg" alt="404 error" className='w-2/3 lg:w-1/2 pt-auto mx-auto'/>
          <div className='w-2/3 lg:w-1/3 mb-6 mx-auto lg:my-auto text-center md:text-left text-white space-y-6'>
            <h1 className='text-4xl font-semibold'>Oops! Page not found</h1>
            <p>We're sorry, but the page you requested could not be found.</p>
            <button className="ptw-grad hover:scale-110 duration-300 ease-linear hover:shadow-md hover:shadow-white/30 ptw-gradHover text-white font-bold p-2 rounded text-lg md:text-2xl w-full md:w-2/3"><a href="/">Go back to homepage</a></button>
          </div>
        </div>
      </div>
  );
};

export default NotFound;