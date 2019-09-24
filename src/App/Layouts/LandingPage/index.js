import React, { Component } from 'react'

const LandingPage = ({ logo }) => {
    return(
        <>
            <header className="header"> 
                <div className="under-construction logo-box">
                    <img src={logo} alt="image" className="logo" />
                </div>
                <div className="under-construction header__text-banner">
                    <h1 className="header-primary">
                        <span className="header-primary-main">Indoors</span>
                        <span className="header-primary-sub">why go outside</span>
                    </h1>
                    <a href="#" className="btn btn-white btn-animated">Discover Sleep</a>
                </div>
            </header>
        </>
    )
}

export default LandingPage;