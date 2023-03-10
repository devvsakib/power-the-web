import { useState, useEffect } from 'react'
import data from '../../../json/interviewquestions.json'

const Questions = ({ content }) => {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const html = data.filter((item) => item.tag === content)
        setQuestions(html)
    }, [content])

    return (
        <div>
            {
                !questions.length ? <h1 className='text-2xl font-bold'>No Questions Found</h1> :
                questions.map((question, idx) => (
                    <div key={idx} className='bg-black/20 backdrop-blur-sm rounded p-5 my-5'>
                        <h1 className='font-semibold text-2xl font-[raleway] mb-2'>{question.question}</h1>
                        <p className=''>{question.answer}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Questions