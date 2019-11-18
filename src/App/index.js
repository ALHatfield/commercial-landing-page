import React, { useState } from 'react'


import LandingPage from './Layouts/LandingPage.js'



const App = () => {

  const [content ] = useState({ 
    name: "indoors",
    slogan: 'why go outside?',
    text: 'discover sleep',
    images: {
      hero: '/images/hero.jpg',
      logo: '/images/logo-white.png',
    }
  })



  return(
    <>
      <LandingPage {...content} />
    
    </>
  )
}

export default App
