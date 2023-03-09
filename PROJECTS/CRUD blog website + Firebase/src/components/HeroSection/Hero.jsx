import { React, useState } from 'react'
import './herosec.css'
import './script'
import data from './data.json'

function HeroSection() {
  const [val, setVal] = useState(0)
  const updateMeUp = (e) => setVal(val + 1)
  const updateMeDown = (e) => { if (val > 0) { setVal(val - 1) } }

  const handleClick = (e) => {
    if (e.target.classList.contains("op")) {
      console.log(e.target.className)
    }
    if (e.target.classList.contains("opp")) {
      console.log(e.target.className)
    }
  }
  return (

    <>
      <div className="container-fluid heroContainer flex-col justify-center items-center">
        <div className="leftImg">
          <img id='anchor' src="/assets/img/rob1.png" alt="Robot.jpg" />
          <div id="balls">
            <p className="ball"></p>
            <p className="ball"></p>
          </div>
          <h3 id='chngTxt'>Hello There</h3>
          <div >
            <button type="button" className="btn btn-primary" onClick={updateMeUp}>+</button>
            <span className='px-5'>{val}</span>
            <button type="button" className="btn btn-danger" onClick={updateMeDown}>-</button>
          </div>
        </div>
        <div className='mt-5 px-10 items-center flex-col justify-center'>
          {/* <table className='m-auto mt-10'>
            <tr className='bg-red-200 text-black py-[50px]'>
              <th className='py-3'>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>IP</th>
            </tr>
            {
              data.map((e) => (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.first_name}</td>
                  <td>{e.last_name}</td>
                  <td>{e.email}</td>
                  <td>{e.gender}</td>
                  <td>{e.ip_address}</td>
                </tr>
              ))
            }
          </table> */}

          <h2 className='text-center' style={{color:'red'}}>Hellow World</h2>

          <p>0</p>
          <button onClick={handleClick} className="op">Click</button>
          <button onClick={handleClick} className="opp">Click</button>
          
        </div>
      </div>
    </>
  )
}

export default HeroSection