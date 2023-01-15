import React from 'react'
import styled from 'styled-components'
import imgSlide from './imgSlide'

function Home() {
    return (
        <Container>
            <imgSlide/>
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 60px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        height: 100%;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1
    }
`