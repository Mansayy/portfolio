import React from "react";
import FractalTree from "./FractalTree";
import '../styles/IntroPage.css';

const IntroPage = () => {
    return (
        <section id="Intro" className="section">
            <div className="intro-container">
                <FractalTree />
                <span className="hi">Hi! I am</span>
                <span className="name"> Mansi Joshi. </span>
                <div className="intro-one">Fueling my curiosity, one line of code at a time!</div>
                <p className="p">I am a software dev based in the United States, passionate about building large-scale, high-impact products that scale to handle massive volumes.</p>
            </div>
        </section>
    );
};

export default IntroPage;
