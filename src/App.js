import React, { Component } from 'react'
import Brand_Logo from '../dist/vender/img/logo-white.png'

export default class App extends Component {

    render() {
        return(
            <>
                <header className="header under-construction"> 
                    <div className="logo-box under-construction">
                        <img src={Brand_Logo} alt="image" className="logo" />
                    </div>
                    <div className="text-box under-construction">
                        <h1 className="header-primary">
                            <span className="header-primary-main">Indoors</span>
                            <span className="header-primary-sub">why go outside</span>
                        </h1>

                        <a href="#" class="btn btn-white">Discover Sleep</a>
                    </div>
                </header>
            </>
        )
    }
}

