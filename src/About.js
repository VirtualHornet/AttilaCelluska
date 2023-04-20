import Computer from './img/computer.png';
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Stack: <AiFillHtml5></AiFillHtml5> <DiCss3></DiCss3> <SiJavascript></SiJavascript> <FaReact></FaReact></p>
            </div>
        </section>
    )
}

export default About;