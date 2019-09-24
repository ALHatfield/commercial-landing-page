import React from 'react'
import styled from 'styled-components'

// first attempt at styled components
const Header = styled.header`
    position: relative;
    height: 95vh;
    text-align: center;
    background-size: cover;
    background-position: top;
    background-image: 
    linear-gradient(
        to right bottom, 
        rgba(0, 46, 126, 0.8),
        rgba(31, 0, 102, 0.8),
    ),
    url('../dist/vender/img/hero.jpg');
    clip-path: 
    polygon(
        0 0,  
        100% 0,
        100% 80%,
        50% 100%, 
        0 80%
  );
`


const LandingPage = ({ logo }) => {

    return(
        <Header className="header"> 
            <div className="under-construction logo-box">
                <img src={logo} alt="image" className="logo" />
            </div>
            <div className="under-construction header__text-banner">
                <h1 className="header-primary">
                    <span className="header-primary-main">Indoors</span>
                    <span className="header-primary-sub">why go outside</span>
                </h1>
                <a href="#" className="btn btn-white btn-animated">Discover Sleep</a>
            </div>
        </Header>
    )
}

export default LandingPage;