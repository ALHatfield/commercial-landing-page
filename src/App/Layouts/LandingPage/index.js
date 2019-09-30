import React from 'react'
import styled, { ThemeProvider } from 'styled-components'


/*
  Rendering Components 
*/
const BrandLogo = ({ logo_file }) => {
  return <img src={require(`../../Images/${logo_file}`)} className="logo" />
}

const BrandHeading = ({ heading, slogan }) => {
  return(
    <h1 className="header-primary">
      <span className="header-primary-main">{ heading }</span>
      <span className="header-primary-sub">{ slogan }</span>
    </h1>
  )
}

const Button = ({ text }) => {
  return(
    <a href="#" className="btn btn-white btn-animated">{ text }</a>
  )
}

/* 
  End of Rendering Components 
*/





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

import bg_image from '../../Images/hero.jpg'
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
      url(${bg_image})
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
  slogan,
  text,
  logo,
  image
}) => {
  return(
    <Overlay>
      <Banner hero_image={ image }>
        <BrandLogo logo_file={ logo } />
        <HeroText className="under-construction header__text-banner">
          <BrandHeading heading={ name } slogan={ slogan } />
          <Button text={text} />
        </HeroText>
      </Banner>
    </Overlay>    
  )
}

export default LandingPage;
