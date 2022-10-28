import React from 'react'
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useFetch } from '../hooks'

export const Layout = () => {

    const [counter, setCounter] = useState(1)
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote, author } = !!data && data[0];
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    });
    const pReg = useRef();

    useLayoutEffect(() => {
        if(pReg.current){
            const {width,height} = pReg.current.getBoundingClientRect();
            
            setBoxSize({width,height});
        }
    }, [quote])

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr/>
            {isLoading
            ? (
                <div className="alert alert-info text-center">
                    Loading...
                </div>)
            : (
                <>
                <blockquote className="blockquote text-end" style={{display: 'flex'}}>
                    <p ref={pReg} className="mb-1">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
                <code>{JSON.stringify(boxSize)}</code>
                <button className="btn btn-primary" disabled={isLoading} onClick={() => setCounter(counter+1)}>Next quote</button>
                </>
            )}
        </>
    ) 
}
