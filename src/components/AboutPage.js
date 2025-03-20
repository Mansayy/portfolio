import React, { useState, useEffect } from 'react';
import '../styles/AboutPage.css';
const AboutPage = () => {
    const fullText = 'About Me';

    return (
        <div>
            <div className="about">
                    <pre className="about-text">{fullText}</pre>
            </div>
            <div className="content">
                <div className="text">
                <center><div className="image">
                    <img src={"./public/logo.jpg"} alt="Mansi Joshi" />
                </div>
                </center>
                    <p>

                     </p>
                </div>
              
            </div>
        </div>
    );
};

export default AboutPage;