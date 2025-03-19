import React, { useState, useEffect } from 'react';
import '../styles/AboutPage.css';
const AboutPage = () => {
    const fullText = '/ About Me';

    return (
        <div>
            <div className="about-container">
                <div className="about-window">
                    <pre className="about-text">{fullText}</pre>

                </div>
            </div>
            <div className="content">
                <div className="text">
                <center><div className="image">
                    <img src="./public/logo.jpg" alt="Mansi Joshi" />
                </div>
                </center>
                    <p>
                        Hi There, I am Mansi Joshi. I graduated from New York University in 2024 with  M.S. in Computer Engineering. I am currently working as a Software Developer at Coforge, where my client is New Hampshire State Police.
                    </p>
                </div>
              
            </div>
        </div>
    );
};

export default AboutPage;