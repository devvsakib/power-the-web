import { useState, useEffect } from 'react'
import htmlQuestions from '../../../json/interview'

const Questions = ({ content }) => {
    const [questions, setQuestions] = useState([])
    const { css, html, nextjs, react, javascript, typescript } = htmlQuestions
    useEffect(() => {
        try {
            if (content === "css") {
                setQuestions(css)
            } if (content === "html") {
                setQuestions(html)
            }
            if (content === "react") {
                setQuestions(react)
            } if (content === "next.js") {
                setQuestions(nextjs)
            }
            if (content === "typescript") {
                setQuestions(typescript)
            } if (content === "javascript") {
                setQuestions(javascript)
            }
        } catch (error) {
            console.error(error);
        }
    }, [content, css, html, javascript, nextjs, react, typescript])
    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold'>{questions.length} Questions</h1>
                <img className='mx-auto w-full' src={`/images/${content}Interviewthumb.png`} alt='Interviewthumb.png'/>
            </div>
            <div>
                {
                    !questions.length ? <h1 className='text-2xl font-bold'>No Questions Found</h1> :
                        questions.map((question, idx) => (
                            <div key={idx} className='bg-[#242A31]/5 backdrop-blur-sm rounded p-5 my-5'>
                                <h1 className='font-semibold text-2xl font-[raleway] mb-2'>{question.question}</h1>
                                <p className=''>{question.answer}</p>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default Questions