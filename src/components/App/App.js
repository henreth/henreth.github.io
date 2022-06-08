import React, {useEffect, useState} from "react"
import Home from "../Home/Home"
import './App.css';
import About from "../About/About"
import Projects from "../Projects/Projects"
import Tech from "../Tech/Tech"
import Contact from "../Contact/Contact"
import Navigation from "../Navigation/Navigation"
import { scroller as Scroll } from "react-scroll"


export default function App() {
  let [showNavigation,setShowNavigation] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll", () => {
    if (window.scrollY < 650) {
      setShowNavigation(false);

    }
    if (window.scrollY > 650) {
      setShowNavigation(true);
  }
  })},[window.scrollY])

  function aboutScroll() {
    Scroll.scrollTo("about", {
      smooth: true
    });
  }

  function projectsScroll() {
    Scroll.scrollTo("projects", {
      smooth: true
    });
  }

  function techScroll() {
    Scroll.scrollTo("tech", {
      smooth: true
    });
  }

  function contactScroll() {
    Scroll.scrollTo("contact", {
      smooth: true
    });
  }

  function homeScroll() {
    Scroll.scrollTo("home", {
      smooth: true
    });
  }




  return (
    <div id="home" className="port-section">
      {showNavigation ?
        <Navigation
          aboutScroll={aboutScroll}
          projectsScroll={projectsScroll}
          techScroll={techScroll}
          contactScroll={contactScroll}
          homeScroll={homeScroll}
        />
        :
        null}
      <div className="home-section" name='home'>
        <Home
          aboutScroll={aboutScroll}
          projectsScroll={projectsScroll}
          techScroll={techScroll}
          contactScroll={contactScroll}
        />
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
  );
}