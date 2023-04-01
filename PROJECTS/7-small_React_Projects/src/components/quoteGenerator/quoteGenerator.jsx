import React, { useState, useEffect } from 'react'
import './quoteGenerator.css'
export default function QuoteGenerator() {

    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);

    function getRandomQuote(quotes) {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
    function getNewQuote() {
        setQuote(getRandomQuote(quotes));
    }
    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((json) => {
                setQuotes(json);
                setQuote(json[0]);
            });

    }, []);


    return (
        <div className='container3'>
            <h1>Project 3: Quote Generator</h1>
            <section className='panel'>
                <button className='change' onClick={getNewQuote}>New Quote</button>
                <h3>
                    <span>"</span>
                    {quote && quote.text}
                    <span>"</span>
                </h3>
                <p> <i>- {quote && quote.author}</i></p>
            </section>
        </div>
    );
}

