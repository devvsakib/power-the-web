//  write a custom hook to get the window size

import { useState, useEffect, useCallback } from 'react';

const useWindow = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  /*
   Added  the useCallback hook to memoize the handleResize function.
   This could improve performance by avoiding unnecessary re-renders of the 
   component which will use this hook.
*/

  /*
  Used the requestAnimationFrame API to debounce the handleResize function.
   This could improve performance by reducing the number of times the function 
   is called during window resizing.
*/

  /**
 Debouncing is a technique used to improve performance by
  reducing the frequency of an action. 
  In the context of window resizing, debouncing refers to delaying the execution of 
  a function until a certain amount of time has passed since the last time 
  the event was fired.
 */

  /*
Using the requestAnimationFrame API to debounce the handleResize function can
 improve performance by delaying its execution until the next animation frame. 
 This means that the function will only be executed once per animation frame, 
 regardless of how many times the resize event is fired.
 */

  const handleResize = useCallback(() => {
    requestAnimationFrame(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return windowSize;
};

export default useWindow;
