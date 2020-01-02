import React from 'react'
import styled, { ThemeProvider } from 'styled-components'


const Banner = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: top;
`;

const HeroText = styled.section`
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  > a:link,
    a:visited {
      display: inline-block;
      padding: 15px 40px;
      border-radius: 100px;
      text-transform: uppercase;
      text-decoration: none;
      position: relative;
    }

`;

const Overlay = styled.section`
  position: relative;
  height: 90vh;
  clip-path: 
    polygon(
      0 0,  
      100% 0,
      100% 80%, 
      0 100%
    );
  
  > section {
    background-image: 
      radial-gradient(rgba(30, 30, 30, .5), white), 
      url(${props => props.bg})
  }
`



const LandingPage = ({
  name,
  logo,
  image,
  text1,
  text2,
}) => {
  return(

    <Overlay bg={ image }>
      <Banner>
        <HeroText className="header__text-banner">
          <img src={ logo } className="logo" />
          <h1 className="header-primary">
            <span className="header-primary-main">{ name }</span>
            <span className="header-primary-sub">{ text1 }</span>
          </h1>
          <a href="#" className="btn btn-white btn-animated">{ text2 }</a>
        </HeroText>
      </Banner>
    </Overlay>    
  )
}

export default LandingPage;
