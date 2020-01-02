import React from 'react'


const LandingPage = ({
  name,
  slogan,
  text,
  images
}) => {
  return(
    <>
      <section className="landingpage_container" img={ images.hero }>
        <div className="header">
          <h1 className="header-primary">
            <span className="header-primary-main">{ name }</span>
            <span className="header-primary-sub">{ slogan }</span>
          </h1>
        </div>

        <div className="www under-construction">

        </div>
      </section>

    </>
  )
}

export default LandingPage;
