export default function NavBar({}) {
    return (
            <div className="nav-main">
                <ul>
                    <li className="about" onClick={scrollToAbout}>ABOUT</li>
                    <li className="projects" onClick={scrollToProjects}>PORTFOLIO</li>
                    <li className="skills" onClick={scrollToTech}>SKILLS</li>
                    <li className="contact" onClick={scrollToContact}>CONTACT</li>
                </ul>
            </div>
    )
}