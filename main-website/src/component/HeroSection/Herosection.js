import React from 'react'
import "./hero.css"
function Herosection() {
  return (
    <>
      <div className='hero-section flex items-center'>
        <div className='hero-content flex-auto'>
          <h2 className=' text-5xl font-bold'>PoweTheWeb</h2>
          <p className=''>An opensouce Projects for Web Developer. Start your development from here.</p>
        </div>
        <div className='dc-frame'>
          <iframe
            src="https://discord.com/widget?id=1014618195174363157&theme=dark"
            width="600"
            height="400"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Herosection;