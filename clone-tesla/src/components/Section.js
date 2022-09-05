import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title, description, leftBtn, rightBtn, bgimg, bgVdo}) {
  // console.log(props)
  return (
    <Wrap bgImage={bgimg}>
      
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
          <Fade bottom>
        <ButtonGroup>
          <LeftButton>
            {leftBtn}
          </LeftButton>
          { rightBtn && 
          <RightButton>
            {rightBtn}
          </RightButton>
          }
        </ButtonGroup>
          </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => `url(/images/${props.bgImage})`};
    background-size: cover !important;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 0
    `
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    
    `
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
      flex-direction: column;
    }
    
    `
    const LeftButton = styled.div`
    background: rgba(23,26,32,0.8);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
    border-radius: 30px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px
`
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65  
`
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDownArrow infinite 1s;
`
const Buttons = styled.div``