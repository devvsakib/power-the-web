import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a><img src="/images/home-icon.svg" /><span>home</span></a>
        <a><img src="/images/search-icon.svg" /><span>search</span></a>
        <a><img src="/images/watchlist-icon.svg" /><span>watchlist</span></a>
        <a><img src="/images/original-icon.svg" /><span>originals</span></a>
        <a><img src="/images/movie-icon.svg" /><span>movies</span></a>
        <a><img src="/images/series-icon.svg" /><span>series</span></a>
      </NavMenu>
      <Profile>
      <p>Profile</p>
        <img src='https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2020/04/15/2240ae0e-7eda-11ea-8736-98edddd9b5ca_image_hires_181558.JPG?itok=PvxUXTaV&v=1586945766' />
      </Profile>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 60px;
  background: #090b13;
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  @media (max-width: 375px){
    height:45px;
    display: flex;
    flex-direction: column;
    padding-bottom: 0;

  }
  letter-spacing: 1px
  `
  const Logo = styled.img`
  width: 60px;
  @media (max-width: 375px){
  }
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
    margin: 0px 10px;
    cursor: pointer;
    img{
      width: 20px;
      margin-right: 5px
    }
    span{
      position: relative;
      // margin-bottom: 10px;
      &:after{
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        bottom: -5px;
        right: 0;
        left: 0;
        transform: scaleX(0);
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;
      }
    }
    &:hover {
      span:after{
        transform: scaleX(1);
        opacity: 1
      }
    }
    @media (max-width: 850px){
      display: none;
    }
  }
  
  `
const Profile = styled.div`
  display: flex;
  align-items: center;  
  p{
    margin-right: 20px !important;
  }
  img{
    width: 35px;
    border-radius: 50%
  }
  @media (max-width: 375px){
    display: none
  }
`