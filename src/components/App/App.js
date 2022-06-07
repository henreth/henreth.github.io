import Home from "../Home/Home"
import './App.css';
import About from "../About/About"
import Projects from "../Projects/Projects"
import Tech from "../Tech/Tech"
import Contact from "../Contact/Contact"
import { scroller as Scroll } from "react-scroll"

export default function App() {

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




  return (
    <div id="home" className="port-section">
      <div className="home-section">
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