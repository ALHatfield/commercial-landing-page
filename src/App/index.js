import React, { Component } from 'react'
import LandingPage from './Layouts/LandingPage'


const content = {
    name: "Indoors",
    slogan: "Why go outside?",
    logo: '../../dist/vender/img/logo-white.png'
}



export default class App extends Component {
    // leave as a class (instead of function) for now even though it only renders a view
    

    render() {
        return(
            <>
                <LandingPage {...content} />
            </>
        )
    }
}


/*  TODO:
    figure out node fs module to join image name to compontent's relative path to dist folder
*/
