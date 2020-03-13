import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = props => {
    return (
        <footer>
            <div className="brand-icon-dock">
                <div className="brand-icon">
                    <a href="https://github.com/yboodhan" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon size="3x" icon={faGithub} />
                    </a>
                </div>
                <div className="brand-icon">
                    <a href="https://www.linkedin.com/in/yboodhan/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon size="3x" icon={faLinkedinIn} />
                    </a>
                </div>
                <div className="brand-icon">
                    <a href="mailto:yboodhan@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon size="3x" icon={faEnvelope} />
                    </a>
                </div>
            </div>
            © Copyright 2019 - {new Date().getFullYear()}
            <br />
            All rights reserved. Powered by {` `}
            <a href="https://www.gatsbyjs.org">React</a>.
        </footer>
    )
}

export default Footer