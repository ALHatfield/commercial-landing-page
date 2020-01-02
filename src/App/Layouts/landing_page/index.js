import React from 'react'
import styled, { ThemeProvider } from 'styled-components'



/* 
  Style Components 
*/
const Banner = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: top;
`;

// import bg_image from '../../images/hero.jpg'
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
      url(${this.props.bg})
  }
`

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

/*
 End of styled components 
*/




const LandingPage = ({
  name,
  logo,
  landing
}) => {
  return(
    // overlay sets bg and radial gradient
    <Overlay bg={ landing.image }>

      // banner sets 90vh ??? repeats css properties from overlay
      <Banner hero_image={ image }>
      
        <img src={ image } className="logo" />
        <HeroText className="header__text-banner">
          <h1 className="header-primary">
            <span className="header-primary-main">{ heading }</span>
            <span className="header-primary-sub">{ slogan }</span>
          </h1>
          <a href="#" className="btn btn-white btn-animated">{ text }</a>
        </HeroText>
      </Banner>
    </Overlay>    
  )
}

export default LandingPage;
