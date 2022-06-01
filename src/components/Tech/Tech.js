import React from "react";
import python from "./python.png"
import javascript from "./javascript.png";
import typescript from "./typescript.png"
import nodejs from "./nodejs.png";
import react from "./react.png";
import html from "./html5.png";
import css from "./css3.png";
import ruby from "./ruby.png";
import rails from "./rails.png";
import postgres from "./postgresql.png";
import git from "./git.png";
import "./Tech.css"

export default function Tech() {
  return (
    <div className="port-section">
        <div className="tech-information">
          <h1 className="tech-title">Technical Skills</h1>
          <div className="tech-tools">
            <div>
              <img src={javascript} alt="js" />
              <p>Javascript</p>
            </div>
            <div>
              <img src={typescript} alt="ts" />
              <p>Typescript</p>
            </div>
            <div>
              <img src={react} alt="react" />
              <p>React.js</p>
            </div>
            <div>
              <img src={nodejs} alt="node" />
              <p>Node.js</p>
            </div>
            <div>
              <img src={html} alt="hmtl" />
              <p>HTML</p>
            </div>
            <div>
              <img src={css} alt="css" />
              <p>CSS</p>
            </div>

          </div>
          <div className="tech-tools">
            <div>
              <img src={python} alt="py" />
              <p>Python</p>
            </div>
            <div>
              <img src={ruby} alt="rb" />
              <p>Ruby</p>
            </div>
            <div>
              <img src={rails} alt="rbr" />
              <p>Ruby on Rails</p>
            </div>
            <div>
              <img src={postgres} alt="sql" />
              <p>PostgreSQL</p>
            </div>
            <div>
              <img src={git} alt="git" />
              <p>Git</p>
            </div>
          </div>
        </div>
    </div>
  );
}

