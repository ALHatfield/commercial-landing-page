import React from 'react'
import styled from 'styled-components'

const LandingPage = ({
  name,
  slogan,
  text,
  logo,
  image
}) => {
  return(
    <Banner image_file={ image }> 
      <BrandLogo logo_file={ logo } />
      <div className="header__text-banner">
        <BrandHeading heading={ name } slogan={ slogan } />
        <Button text={text} />
      </div>
    </Banner>
  )
}
export default LandingPage;




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
const Banner = styled.header`
  position: relative;
  height: 95vh;
  text-align: center;
  background-size: cover;
  background-position: top;
  background-image: 
    linear-gradient(
      to right bottom, 
      rgba(38, 0, 88, 0.3),
      rgba(0, 77, 66, 0.6),
    ),
    ${props => `url(../../Images/${props.image_file})`}; /* ISSSSUESSSSS S !!!!!!!!!!!!!!!!!!!!!!*/
  clip-path: 
    polygon(
      0 0,  
      100% 0,
      100% 80%,
      50% 100%, 
      0 80%
    );
`;

const TextBanner = styled.div`

`;
// End of styled components


