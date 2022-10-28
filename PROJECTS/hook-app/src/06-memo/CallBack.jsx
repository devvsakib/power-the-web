import React, { useCallback } from 'react'
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBack = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather =  useCallback(
      (value) => {
        setCounter( (c) => (c+value));
      },
      [],
    )
  return (
    <>
      <h1>useCallBack hook: {counter}</h1>
      <hr/>

      <ShowIncrement increment={incrementFather}/>
    </>
  )
}
