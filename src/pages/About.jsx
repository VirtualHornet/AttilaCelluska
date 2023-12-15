import Computer from '../img/computer.png';
import "./About.css";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {motion, useInView} from 'framer-motion';
import { useRef } from 'react';

function About (props){
    const ref = useRef(null);
    const isInView = useInView(ref);
   
   
    const variant1=  {
        hidden: {opacity:0, y:75},
        visible: {opacity:1, y:0},
    }

    const variant2=  {
        hidden: {opacity:0, scale:0},
        visible: {opacity:1, scale:1},
    }

    const variant3=  {
        hidden: {opacity:0, x:'-75vw'},
        visible: {opacity:1, x:0},
    }

    const variant4=  {
        hidden: {opacity:0, x:'100vw'},
        visible: {opacity:1, x:0},
    }
 
 

    return(
        <section ref={ref} id="about"className={props.color==="light"?"":"darkbackground"} >
            <div className="left">
                <motion.img 
                     variants={variant3}
                     initial="hidden"
                     animate={
                         isInView?'visible':""
                     }
                     transition={{
                         duration: 1,
                         type: "spring", 
                         stiffness: 100
                     }}
                
                src={Computer} alt="Computer" />
            </div>
            <div className="right">
                <motion.h2
                    variants={variant1}
                    initial="hidden"
                    animate={
                        isInView?'visible':""
                    }
                    transition={{
                        duration: 1,
                        type: "spring", 
                        stiffness: 100
                    }}
                
                
                >About Me</motion.h2>
                <motion.p
                     variants={variant2}
                     initial="hidden"
                     animate={
                         isInView?'visible':""
                     }
                     transition={{
                         duration: 0.5
                     }}
                
                >I am a Junior Front-End Developer based in Topolya, Serbia. I have a skills in Html, Css, Javascript, React, Bootstrap.
                    I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise
                    lies in carfting dynamic, engaging interfaces through writing clean and optimized code . I am also a team player 
                     to produce outstanding web applications.
                </motion.p>
                <motion.p
                      variants={variant4}
                      initial="hidden"
                      animate={
                          isInView?'visible':""
                      }
                      transition={{
                          duration: 1.8
                      }}
                >Stack: <AiFillHtml5></AiFillHtml5> <DiCss3></DiCss3> <SiJavascript></SiJavascript> <FaReact></FaReact></motion.p>
            </div>
        </section>
    )
}

export default About;