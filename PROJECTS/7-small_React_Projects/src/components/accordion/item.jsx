import React from "react"
import './accordion.css'
export default function Item({ ques, ans, handleAccord, itemId, id }) {


    return (
        <div className="item">
            <div className="ques" onClick={() => handleAccord(id, itemId)}> <p>{ques}</p> <p>{id === itemId ? "➖" : "➕"}</p> </div>
            {itemId === id && <p className="ans">{ans}</p>}
            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ipsa?</p> */}
        </div>

    )
}