import React from 'react'
import styled, { ThemeProvider } from 'styled-components'



// Rendering Components
const BrandLogo = ({ logo_file }) => {
  return(
    <div className="logo_url-box">
      <img src={require(`../../Images/${logo_file}`)} className="logo" />
    </div>
  )
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
// End of Rendering Components





// Style Components
import bg_image from '../../Images/hero.jpg'
const Banner = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: top;
  background-image: url(${bg_image});
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
    z-index: 100;
    background-image: linear-gradient(
      to right bottom, 
      rgba(0, 46, 126, 0.8),
      rgba(31, 0, 102, 0.8),
    )
  }
`

const HeroText = styled.h1`
  text-align: center;
`;
// End of styled components



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
        <HeroText className="header__text-banner">
          <BrandHeading heading={ name } slogan={ slogan } />
          <Button text={text} />
        </HeroText>
      </Banner>
    </Overlay>    
  )
}
export default LandingPage;

