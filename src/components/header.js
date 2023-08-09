import React from "react";
import './styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import the specific GitHub icon

export default function Header() {
    return(
        <header>
            <h1>Paul Tuemler</h1>
            <div class='header-icons'>
            <a href="https://github.com/Pault26">
            <FontAwesomeIcon className="fa-brands" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/paul-tuemler/">
            <FontAwesomeIcon className="fa-brands" icon={faLinkedinIn} />
            </a>
            </div>
        </header>
    );
};