import './card_model.scss'

import React from 'react'

const card_model = (props) => {
  return (
    <>
    <div className="container card" >
        <img src={props.icon} alt="icon" />
        <div className="card-heading">{props.heading}</div>
        <div className="card-description">{props.data}</div>
    </div>
    </>

  )
}

export default card_model
