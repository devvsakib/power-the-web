import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a><img src="/images/home-icon.svg"/>Home</a>
        <a><img src="/images/search-icon.svg"/>search</a>
        <a><img src="/images/watchlist-icon.svg"/>watchlist</a>
        <a><img src="/images/original-icon.svg"/>originals</a>
        <a><img src="/images/movie-icon.svg"/>movies</a>
        <a><img src="/images/series-icon.svg"/>series</a>
      </NavMenu>
      <Profile>
        <p>Profile</p>
        <img src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'/>
      </Profile>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 60px;
  // width: 100vw;
  background: #090b13;
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px
  `
  const Logo = styled.img`
  width: 60px;
  `
  const NavMenu = styled.div`
  display: flex;
  flex:1;
  margin-left: 50px;
  align-items: center;
  a{
    // background: orange;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    img{
      width: 20px;
      margin-right: 5px
    }
  }
  
  `
const Profile = styled.div`
  display: flex;
  align-items: center;  
  p{
    marign-right: 20px;
  }
  img{
    width: 35px;
    border-radius: 50%
  }
  `