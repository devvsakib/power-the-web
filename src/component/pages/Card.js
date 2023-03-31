import React from 'react'
import CardBox from '../Contributors/CardBox.js'
import Layout from '../index.js'

const Card = () => {
  return (
    <Layout>
      <div className='w-full px-10 mt-8 mb-[23vh]'>
        <div className='mb-12 text-center text-white'>
          <h1 className='text-2xl sm:text-4xl'>Grab your Contributor Card</h1>
          <p className='text-sm sm:text-lg'>Your Contributor Card will show you how many projects you've submitted</p>
        </div>
        <div className='sm:flex sm:flex-row justify-center gap-[3rem]'>
          <div className='card-box'>
            <CardBox/>
          </div>
          <div className='card-info'>
            <div className='sm:text-left text-center mt-[20px]'>
              <button class="pl-4 pr-4 pt-2 pb-2 text-[#eac20d] border-[#eac20d] font-[800] rounded-[10px] border-2 hover:bg-[#eac20d] hover:text-white hover:border-[#ffffff]">Download</button>
              <button class="ml-[20px] pl-4 pr-4 pt-2 pb-2 text-[#ffffff] border-[#eac20d] bg-[#eac20d] font-[800] rounded-[10px] border-2 hover:bg-[transparent] hover:text-white hover:border-[#ffffff]">Copy link</button>
            </div>
            <div className='mt-[20px]'>
              <h2 className='text-white font-[600]'>Embed</h2>
              <textarea class="py-3 px-4 mt-1 w-[100%] sm:w-80 rounded-[10px] resize-none " readonly="" wrap="hard">asdsadsadsadsad</textarea>
              <div>
                <button class="mt-1 pl-2 pr-2 pb-1 text-[#ffffff] border-[#ffffff] font-[800] rounded-[10px] border-2 hover:bg-[transparent] hover:text-[#eac20d] hover:border-[#eac20d]">Copy code</button>
                <p className='mt-[15px] text-white text-lg'>Copy code and display contributor card to your github profile.</p>
                <p className='mt-[20px] text-white text-lg'>
                  This is a fantastic concept where you can <br/> show off how many contributed projects you've submitted
                </p>
                <p className='mt-[15px] text-white text-[18px] font-[600]'>
                  Show off your contribution card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Card
