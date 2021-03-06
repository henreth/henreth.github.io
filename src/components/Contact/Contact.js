import ReactTooltip from 'react-tooltip';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileLines, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "./Contact.css"

export default function Contact() {
    return (
        <div className="port-section">
                <div className="contact-information">
                    <h1 className="tech-title"> Contact Me</h1>
                    <div className="contact-options">
                        <a className="contact-option" data-tip data-for='email' href="mailto:mail.henrym@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a className="contact-option" data-tip data-for='resume' href="https://docs.google.com/document/d/1v5EL8XQAyxLtFuryum8B-fOP_cBgD8CUlXzpsZmqbhw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFileLines} />
                        </a>
                        <a className="contact-option" data-tip data-for='linkedin' href="https://www.linkedin.com/in/henrym01/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="contact-option" data-tip data-for='github' href="https://github.com/henreth" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>

                    <ReactTooltip id='email' type='light' effect='solid'>
                        <span>Email Me</span>
                    </ReactTooltip>

                    <ReactTooltip id='resume' type='light' effect='solid'>
                        <span>My Resume</span>
                    </ReactTooltip>

                    <ReactTooltip id='linkedin' type='light' effect='solid'>
                        <span>My LinkedIn</span>
                    </ReactTooltip>

                    <ReactTooltip id='github' type='light' effect='solid'>
                        <span>My GitHub</span>
                    </ReactTooltip>
            </div>
        </div>
    )
}
