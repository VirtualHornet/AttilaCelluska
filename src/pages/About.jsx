import Computer from '../img/computer.png';
import "./About.css";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
function About (props){
    return(
        <section id="about"className={props.color==="light"?"":"darkbackground"} >
            <div className="left">
                <img src={Computer} alt="Computer" />
            </div>
            <div className="right">
                <h2>About Me</h2>
                <p>I am a Junior Front-End Developer based in Topolya, Serbia. I have a skills in Html, Css, Javascript, React, Bootstrap.
                    I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise
                    lies in carfting dynamic, engaging interfaces through writing clean and optimized code . I am also a team player 
                     to produce outstanding web applications.
                </p>
                <p>Stack: <AiFillHtml5></AiFillHtml5> <DiCss3></DiCss3> <SiJavascript></SiJavascript> <FaReact></FaReact></p>
            </div>
        </section>
    )
}

export default About;