import React, { Component } from 'react'
import Brand_Logo from '../../dist/vender/img/logo-white.png'
import LandingPage from './Layouts/LandingPage'

export default class App extends Component {
    // leave as a class (instead of function) for now even though it only renders a view
    

    render() {
        return(
            <>
                <LandingPage logo={Brand_Logo} />
            </>
        )
    }
}


/*  TODO:

    Access all brand images and pass as properties into each page
        - css background style components receive props for png files.

*/
