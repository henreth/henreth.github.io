import React from "react";
import myPhoto from "./me.jpeg";
import "./About.css"

export default function About() {
    return (
        <div className="port-section">
                <div className="about">
                    <div className="about-information">
                        <img src={myPhoto} alt="me" className='about-photo' />
                        <div className="about-description">
                            <p>
                                I'm a full stack engineer educated in Economics and currently living in New York City.
                                I recently graduated from Flatiron School's immersive software engineering bootcamp where I developed skills in JavaScript, React, Ruby, Ruby on Rails, Git, SQL, and HTML/CSS.
                                My experiences have provided me with strong critical thinking, communication, and analytical skills while my background as a Business Development Associate allows me to assess technical concepts for economic value and communicate those ideas to an audience of varying expertise and skill level.
                            </p>
                            <p>
                                Software engineering as a craft deeply interests me and I am always trying to learn more and better ways of problem solving.
                                I am motivated and self-driven but comfortable and eager to work with those who are as passionate about their work as I am.
                            </p>
                            <p>
                                At this time, I am open to any full-time, internship, or apprenticeship opportunities in software engineering.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}