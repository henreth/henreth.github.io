import React from "react"
import "./Home.css"

export default function Home({aboutScroll,projectsScroll,techScroll,contactScroll}) {

    return (
        <React.Fragment>
                    <div className="home-information">
                        <h1 className="name">Henry Miller</h1>
                        <h2 className="home-title">Full Stack Software Engineer</h2>
                    </div>
                    <div className="nav-buttons">
                        <button className='nav-button' onClick={aboutScroll}>About</button>
                        <button className='nav-button' onClick={projectsScroll}>Projects</button>
                        <button className='nav-button' onClick={techScroll}>Skills</button>
                        <button className='nav-button' onClick={contactScroll}>Contact</button>
                    </div>
        </React.Fragment>
    )
}