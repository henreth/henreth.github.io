import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons"
import ghostdLogo from "./ghostd/ghostd-logo.png"
import ghostdGif from "./ghostd/ghostd-demo.gif"
import guthublogo from "./guthub/guthub-logo.png"
import guthubGif from "./guthub/guthub-demo.gif"
import pocketLogo from "./pocket/pocket-logo.png"
import pocketGif from "./pocket/pocket-demo.gif"
import nasavisionLogo from "./space/nasavision.png"
import nasavisionGif from "./space/nasavision-demo.gif"

import "./Projects.css"

export default function Projects() {
    const [project, setProject] = useState('pocket');

    const clickPocket = () => setProject('pocket');
    const clickGuthub = () => setProject('guthub');
    const clickGhostd = () => setProject('ghostd');
    const clickSpace = () => setProject('space');

    const madeWithFullStack = <React.Fragment>
        <div>Made With:</div>
        <div>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" alt="ruby" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" alt="rails" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" />
        </div>
    </React.Fragment>

    const madeWithFrontEnd = <React.Fragment>
        <div>Made With:</div>
        <div>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
        </div>
    </React.Fragment>

    return (
        <div className="port-section">
            <div>
                <h1 className='tech-title'></h1>
                <div className="project-options">
                    <button onClick={clickPocket}>
                        <img
                            data-tip data-for='pocket'
                            className={project === "pocket" ? "project-logo" : "project-logo unClicked"}
                            src={pocketLogo}
                            alt="pocket"
                        />
                        <ReactTooltip id='pocket' place="bottom" type='success'>
                            <span>Pocket Programmers</span>
                        </ReactTooltip>
                    </button>
                    <button onClick={clickGuthub}>
                        <img
                            data-tip data-for='guthub'
                            className={project === "guthub" ? "project-logo" : "project-logo unClicked"}
                            src={guthublogo}
                            alt="guthub"
                        />
                        <ReactTooltip id='guthub' place="bottom" type='info'>
                            <span>GutHub</span>
                        </ReactTooltip>
                    </button>
                    <button onClick={clickGhostd}>
                        <img
                            data-tip data-for='ghostd'
                            className={project === "ghostd" ? "project-logo ghost" : "project-logo ghostd unClicked"}
                            src={ghostdLogo}
                            alt="ghostd"
                        />
                        <ReactTooltip id='ghostd' place="bottom" type='error'>
                            <span>ghostd</span>
                        </ReactTooltip>
                    </button>
                    <button onClick={clickSpace}>
                        <img
                            data-tip data-for='space'
                            className={project === "space" ? "project-logo" : "project-logo unClicked"}
                            src={nasavisionLogo}
                            alt="nasavision"
                        />
                        <ReactTooltip id='space' place="bottom" type='warning'>
                            <span>NASAVISION</span>
                        </ReactTooltip>
                    </button>

                </div>

                {project === 'pocket' ? (
                    <React.Fragment>
                        <h2 className="project-title pocket ">>Pocket Programmers_</h2>
                        <div className="project-display">
                            <img src={pocketGif} width="800" />
                        </div>
                        <div className="project-description">
                            <b className="project-tagline">A digital trading card experience where users can open packs, unlock cards, and trade with other users.</b>
                            <div className="project-features">
                                <br />
                                - Collect 1200+ unique variations of cards themed around famous and influential software engineers
                                <br />
                                - Generate randomly generated assortments of cards upon opening a pack
                                <br />
                                - Track and visualize individual card transaction history
                                <br />
                            </div>
                            {madeWithFullStack}
                        </div>

                        <div className="project-footer">
                            <a className="project-link" data-tip data-for='repo' target="_blank" rel="noreferrer" href="https://github.com/henreth/pocketpros" >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a className="project-link" data-tip data-for='deployed' target="_blank" rel="noreferrer" href="https://pocketprogrammers.herokuapp.com/" >
                                <FontAwesomeIcon icon={faWindowRestore} />
                            </a>
                            <ReactTooltip id='repo' type='light'>
                                <span>GitHub Repo</span>
                            </ReactTooltip>
                            <ReactTooltip id='deployed' type='light'>
                                <span>Live Demo</span>
                            </ReactTooltip>
                        </div>
                    </React.Fragment>
                ) : null}

                {project === 'guthub' ? (
                    <React.Fragment>
                        <h2 className="project-title guthub">GutHub</h2>
                        <div className="project-display">
                            <img src={guthubGif} width="900" />
                        </div>
                        <div className="project-description">
                            <b className="project-tagline">An interactive web application in which users can make, view, or save their favorite cocktails.</b>
                            <div className="project-features">
                                <br />
                                - Search for popular and unique drinks by ingredient, recipe, or name
                                <br />
                                - Create unique cocktails by combining a variety of ingredients
                                <br />
                                - View and save cocktail recipe lists for future reference
                                <br />
                            </div>
                            {madeWithFullStack}
                        </div>

                        <div className="project-footer">
                            <a className="project-link" data-tip data-for='repo' target="_blank" rel="noreferrer" href="https://github.com/henreth/guthub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a className="project-link" data-tip data-for='deployed' target="_blank" rel="noreferrer" href="http://gutthub.herokuapp.com/">
                                <FontAwesomeIcon icon={faWindowRestore} />
                            </a>
                            <ReactTooltip id='repo' type='light'>
                                <span>GitHub Repo</span>
                            </ReactTooltip>
                            <ReactTooltip id='deployed' type='light'>
                                <span>Live Demo</span>
                            </ReactTooltip>
                        </div>

                    </React.Fragment>
                ) : null}

                {project === 'ghostd' ? (
                    <React.Fragment>
                        <h2 className="project-title ghostd">ghostD</h2>
                        <div className="project-display">
                            <img src={ghostdGif} width="950" />
                        </div>
                        <div className="project-description">
                            <b className="project-tagline">A simulated dating app experience themed around creating matches with famous historical figures and ghosts from popular culture.</b>
                            <div className="project-features">
                                <br />
                                - Swipe right on profiles you 'like' or swipe right on the ones you don't.
                                <br />
                                - Press the undo button to undo your last decision if you think you made a mistake.
                                <br />
                                - Match with 40+ unique profiles.
                                <br />
                            </div>
                            {madeWithFullStack}
                        </div>

                        <div className="project-footer">
                            <a className="project-link" data-tip data-for='repo' target="_blank" rel="noreferrer" href="https://github.com/henreth/ghostd" >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a className="project-link" data-tip data-for='deployed' target="_blank" rel="noreferrer" href="https://ghostd-app.herokuapp.com/">
                                <FontAwesomeIcon icon={faWindowRestore} />
                            </a>
                            <ReactTooltip id='repo' type='light'>
                                <span>GitHub Repo</span>
                            </ReactTooltip>
                            <ReactTooltip id='deployed' type='light'>
                                <span>Live Demo</span>
                            </ReactTooltip>
                        </div>

                    </React.Fragment>
                ) : null}


                {project === 'space' ? (
                    <React.Fragment>
                        <h2 className="project-title space">NASAVISION</h2>
                        <div className="project-display">
                            <img src={nasavisionGif} width="950" />
                        </div>
                        <div className="project-description">
                            <b className="project-tagline">A webpage that peers into the universe through the eyes of NASA.</b>
                            <div className="project-features">
                                <br />
                                - View photo of the day provided by the official NASA API
                                <br />
                                - Learn about the earth, our solar system, the universe, and more.
                                <br />
                                - Updates daily with new photo and information
                                <br />
                            </div>
                            {madeWithFrontEnd}
                        </div>

                        <div className="project-footer">
                            <a className="project-link" data-tip data-for='repo' target="_blank" rel="noreferrer" href="https://github.com/henreth/nasavision" >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a className="project-link" data-tip data-for='deployed' target="_blank" rel="noreferrer" href="https://henreth.github.io/nasavision/">
                                <FontAwesomeIcon icon={faWindowRestore} />
                            </a>
                            <ReactTooltip id='repo' type='light'>
                                <span>GitHub Repo</span>
                            </ReactTooltip>
                            <ReactTooltip id='deployed' type='light'>
                                <span>Live Demo</span>
                            </ReactTooltip>
                        </div>

                    </React.Fragment>
                ) : null}

            </div>
        </div>
    )
}

