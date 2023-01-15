import React from 'react'
import { useState } from 'react';
import { useFetch } from '../hooks'

export const MultipleCustomHooks = () => {

    const [counter, setCounter] = useState(1)
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote, author } = !!data && data[0];
    
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
                <blockquote className="blockquote text-end">
                    <p className="mb-1">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            )}
            <button className="btn btn-primary" disabled={isLoading} onClick={() => setCounter(counter+1)}>Next quote</button>
        </>
    ) 
}
