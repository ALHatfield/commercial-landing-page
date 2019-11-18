import styled, { ThemeProvider } from 'styled-components'

export const Section = styled.section`
  position: relative;
  height: 90vh;
  width: 100vw;
  background-image: 
    radial-gradient(rgba(30, 30, 30, .5), white), 
    url(${ props => props.img });
  background-size: cover;
  background-position: top;
  clip-path: 
      polygon(
        0 0,  
        100% 0,
        100% 80%, 
        0 100%
      );
  height: 100%;
`;


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