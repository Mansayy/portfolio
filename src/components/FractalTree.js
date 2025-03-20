
import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import '../styles/FractalTree.css';

const AnimatedTree = p5 => {

    var angle = p5.PI / 4;
    //var slider;
    p5.setup = () => {
        p5.createCanvas(400, 400);
       //slider=p5.createSlider(0,p5.TWO_PI,p5.PI/4,0.01);

    };

    p5.draw = () => {
        p5.clear();
        //angle=slider.value();
        angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16);
        p5.stroke('#64ffda');
        p5.strokeWeight(2);
        p5.translate(p5.width * 0.5, p5.height);
        p5.branch(100);


    };

    p5.branch = (len) => {
        p5.line(0, 0, 0, -len);
        p5.translate(0, -len);

        if (len > 6) {
            p5.push()
            p5.rotate(angle);
            p5.branch(len * 0.67);
            p5.pop();
            p5.push();
            p5.rotate(-angle);
            p5.branch(len * 0.67);
            p5.pop();

        }

    }
};

const FractalTree = () => {
    return (<div id="fractal-tree">
        <ReactP5Wrapper sketch={AnimatedTree} />
    </div>)
};

export default FractalTree;