import React from 'react'
import "./Hero.css"
function Herosection() {
  return (
    <>
      <div className='hero-section flex justify-between py-10 items-center '>
        <div className='hero-content pb-10 mx-auto text-center'>
          <h2 className='text' id="tet">Power<span className='title-mid-word'>The</span>Web</h2>
          <p className='mt-5 text-xl uppercase tracking-widest font-semibold bg-clip-text text-transparent bg-gradient-to-tr from-[#03b7ff] to-[#da35c4]'>An opensouce Projects for Web Developer.<br/> Start your development from here.</p>
        </div>
      </div>
    </>
  )
}

export default Herosection;