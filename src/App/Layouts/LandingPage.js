import React from 'react'
import styled, { ThemeProvider } from 'styled-components'



// export const Section = styled.section`
//   position: relative;
//   height: 90vh;
//   width: 100vw;
//   background-image: 
//     radial-gradient(rgba(30, 30, 30, .5), white), 
//     url(${ props => props.img });
//   background-size: cover;
//   background-position: top;
//   clip-path: 
//       polygon(
//         0 0,  
//         100% 0,
//         100% 80%, 
//         0 100%
//       );
//   height: 100%;
// `;


export const HeroText = styled.section`
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  a:link,
  a:visited {
    display: inline-block;
    padding: 15px 40px;
    border-radius: 100px;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
  }
`;


const LandingPage = ({
  name,
  slogan,
  text,
  images
}) => {
  return(
    <>
      <section className="header" img={ images.hero }>
        <HeroText>
          <img src={ images.logo } className="logo" />
          <h1 className="header-primary">
            <span className="header-primary-main">{ name }</span>
            <span className="header-primary-sub">{ slogan }</span>
          </h1>
          <a href="#" className="btn btn-white btn-animated">{ text }</a>
        </HeroText>
      </section>

      <section>
        
        
      </section>
    </>
  )
}

export default LandingPage;
