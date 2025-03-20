import React from "react";
import FractalTree from "./FractalTree";
import '../styles/IntroPage.css';


const IntroPage = () => {
    return (
        <div className="Intro">
                <FractalTree />
                    <span className="hi">Hi! I am  </span>
                    <span className="name"> Mansi Joshi. </span>
                    <br/>
                    <span className="intro-one">Fueling my curiosity, one line of code at a time!</span>
                    <p class="p">I am a software Dev based in United States, passionate about building large-scale,high-impact products that scale to handle massive volumes.</p>
        </div >
    );
};

export default IntroPage;
