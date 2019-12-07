import React from 'react'
import styled, { ThemeProvider } from 'styled-components'






const LandingPage = ({
  name,
  slogan,
  text,
  images
}) => {
  return(
    <>
      <section className="header" img={ images.hero }>
        <div className="container-center">
          <h1 className="header-primary">
            <span className="header-primary-main">{ name }</span>
            <span className="header-primary-sub">{ slogan }</span>
          </h1>
        </div>
      </section>

    </>
  )
}

export default LandingPage;
