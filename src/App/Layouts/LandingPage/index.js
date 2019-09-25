import React from 'react'
import styled from 'styled-components'

// first attempt at styled components
// const Header = styled.header`

// `

// const TextBanner = styled.div`

// `

// functional view rendering components
const BrandLogo = ({ logo }) => {
    return(
        <div className="under-construction logo-box">
            <img src={ logo } alt="image" className="logo" />
        </div>
    )
}

const BrandHeading = ({ 
    heading, 
    slogan 
}) => {
    return(
        <h1 className="header-primary">
            <span className="header-primary-main">{ heading }</span>
            <span className="header-primary-sub">{ slogan }</span>
        </h1>
    )
}


const LandingPage = (props) => {

    return(
        <div className="header"> 
            <BrandLogo logo={ props.logo } />
            <div className="under-construction header__text-banner">
                <BrandHeading heading={ props.name } slogan={ props.slogan } />
                <a href="#" className="btn btn-white btn-animated">Discover Sleep</a>
            </div>
        </div>
    )
}

export default LandingPage;