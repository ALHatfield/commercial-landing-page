import React, { useState } from 'react'
import LandingPage from './Layouts/LandingPage'

const App = () => {

  const [content, setContent] = useState({
    name: "indoors",
    slogan: "123",
    text: "asdf",
    logo: 'logo-white.png',
    image: 'hero.jpg',
  })


  /* 
    TODO: 
    some cool server request here?
    fetch('/api').then(res => setContent({...res}))
  */


  return(
    <>
      <LandingPage {...content} />
    </>
  )
}

export default App
