import React, { useState } from 'react'
import './accordion.css'
import Item from './item';
import { questions } from './questions';
export default function Accordion() {

    const [itemId, setItemId] = useState(null);
    function handleAccord(id, itemId) {
        if (itemId === id) {

            setItemId(null);
        }
        else {
            setItemId(id);

        }

    }

    return (
        <div className='container2'>
            <h1 className='title'>Project 2: Accordion</h1>
            <div className='accordion'>
                <h2 className='sub-title'>Frequently Asked Questions</h2>
                {
                    questions.map(item => (
                        <Item className="item" ques={item.title} ans={item.info} key={item.id} handleAccord={handleAccord} itemId={itemId} id={item.id} />
                    ))

                }



            </div>


        </div>

    )
}






