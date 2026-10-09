import React from 'react';

// Icons imports
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const LinksRRSS = () => {
    return (
        <>
            <ul className="d-flex justify-content-center gap-4 list-unstyled">
                <li className="">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram /> Instagram
                    </a>
                </li>
                <li className="">
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter /> Twitter (X)
                    </a>
                </li>
                <li className="">
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook /> Facebook
                    </a>
                </li>
                <li className="px-2">
                    <a
                        href="https://www.linkedin.com/in/carrizoignacio1/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                </li>
            </ul>
        </>
    );
};
