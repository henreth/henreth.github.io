import React from "react"
import {scroller as Scroll} from "react-scroll"
import About from "../About/About"
import Projects from "../Projects/Projects"
import Tech from "../Tech/Tech"
import Contact from "../Contact/Contact"

import "./Home.css"

export default function Home() {

    function aboutScroll() {
        Scroll.scrollTo("about", {
            smooth: true
        });
    }

    function ProjectsScroll() {
        Scroll.scrollTo("projects", {
            smooth: true
        });
    }

    function TechScroll() {
        Scroll.scrollTo("tech", {
            smooth: true
        });
    }

    function ContactScroll() {
        Scroll.scrollTo("contact", {
            smooth: true
        });
    }

    return (
        <React.Fragment>
                <div id="home"  className="port-section">
                <div className="home-section">
                        <div className="home-information">
                            <h1 className="name">Henry Miller</h1>
                            <h2 className="home-title">Full Stack Software Engineer</h2>
                        </div>
                        <div className="nav-buttons">
                            <button className='nav-button' onClick={aboutScroll}>About</button>    
                            <button className='nav-button' onClick={ProjectsScroll}>Projects</button>    
                            <button className='nav-button' onClick={TechScroll}>Skills</button>    
                            <button className='nav-button' onClick={ContactScroll}>Contact</button>    
                        </div>                        
                </div>
                <div className="about-section" name="about">
                    <About />
                </div>
                <hr />
                <div className="projects-section" name="projects">
                    <Projects />
                </div>
                <hr />
                <div className="tech-section" name="tech" >
                    <Tech />
                </div>
                <hr />
                <div className="contact-section" name="contact">
                    <Contact />
                </div>
            </div>
        </React.Fragment>
    )
}