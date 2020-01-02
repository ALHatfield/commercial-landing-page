/* dependencies */
import React, { useState } from 'react'
/* layouts */
import LandingPage from './layouts/landing_page'
import ProductPage from './layouts/product_page'




const App = () => {

  const [content, setContent] = useState({
    name: "name",
    logo: 'logo-white.png',

    image: 'images/hero.jpg',
    text1: 'text1',
    text2: 'text2',
    text3: 'text3'
    
  })

  const [product, setProduct] = useState({
    name: "Audio-Technica ATH-MSR7",
    description: "2017 all the awards",
    images: [
      { src: 'ath-msr7-black.jpg', color: "black" },
      { src: 'ath-msr7-brown.jpg', color: "brown" }
    ],
    text1: "text1",
    text2: "text2",
    price1: 59.99,
    price2: 89.99,
  })




  return(
    <>
      <LandingPage { ...content } />
      <ProductPage { ...product } />


    </>
  )
}

export default App
