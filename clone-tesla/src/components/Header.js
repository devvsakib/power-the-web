import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'

function Header() {
    const [burgerOpen, setBurgerStatus] = useState(false);
    return (
        <Container>
            <p>
                <img src="/images/logo.svg" alt="Logo" />
            </p>

            <Menu>
                <li><a>Model S</a></li>
                <li><a>Model 3</a></li>
                <li><a>Model X</a></li>
                <li><a>Model Y</a></li>
                <li><a>Model Solar Roof</a></li>
                <li><a>Model Solar Panels</a></li>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>

            <BurgerNav show={burgerOpen}>
                <WrapIcon>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </WrapIcon>
                <li><a>Model S</a></li>
                <li><a>Model 3</a></li>
                <li><a>Model X</a></li>
                <li><a>Model Y</a></li>
                <li><a>Existing Inventory</a></li>
                <li><a>Used INventory</a></li>
                <li><a>Trad-in</a></li>
                <li><a>Cybertruck</a></li>
                <li><a>Roadaster</a></li>
                <li><a>Semi</a></li>
                <li><a>Semi</a></li>
                <li><a>Semi</a></li>
                <li><a>Charging</a></li>
                <li><a>Test Drive</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    backdrop: blur(5px)
    `
const Menu = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    li{
        font-size: 14px;
        font-weight: 600;
        padding: 0 20px
    }
    @media (max-width: 768px){
        display: none;
    }

`
const RightMenu = styled.div`
    display: flex;    
    font-size: 14px;
    align-items: center;
    font-weight: 600;
    a{
        margin: 0 10px;
        cursor: pointer;
    }
    @media (max-width: 335px){
        font-size: 12px;
    }
    `
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    background-color: white;
    width: 43vw;
    height: auto;
    padding: 40px 45px;
    display: flex column;
    text-align: start;
    color: #ddd !important;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s ease-in-out;
    li{
        font-size: 14px;
        font-weight: 600;
        padding: 12px 0;
        cursor: pointer;
    }    
    @media (max-width: 335px){
        padding: 30px 30px;
    }
    `
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    `
const WrapIcon = styled.div`
    display:flex;
    justify-content: flex-end;
`