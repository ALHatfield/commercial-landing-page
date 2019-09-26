import React, { useState } from 'react'
import LandingPage from './Layouts/LandingPage'
// TODO: this belongs in it's own component in the src directory and not in the App directory
// async function getContent() {
//   let content = await fetch('/api')
// }

const App = () => {

  const [content] = useState({
    name: "Indoors",
    slogan: "Why go outside?",
    text: "Discover Sleep",
    logo: 'logo-white.png',
    image: 'hero.jpg',
  })

  return(
    <>
      <LandingPage {...content} />
    </>
  )
}

export default App
