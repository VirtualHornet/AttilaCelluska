import './Projects.css';
import {useState} from 'react'
import currency from '../img/elso.png';
import tik from '../img/tik.png';
import shop from '../img/shop.png'
import simon from '../img/simon.png';
import plant from '../img/plant.png'
import calculator from '../img/calculator.png';
import { VscGithub } from "@react-icons/all-files/vsc/VscGithub";
import {motion, useInView} from 'framer-motion';
import { useRef } from 'react';


function Projects (props){

    const data = [
        {
            title: "CURRENCY BALANCES",
            stack:'REACT',
            url: currency,
            description:"CURRENCY BALANCES is a website that allows users to search for information about currency balances in real-time, and there is a possibility to check a bigger value's exchanged currency.",
            code:"https://github.com/VirtualHornet/CURRENCY-CONVERTER" ,
            live:"https://virtualhornet.github.io/CURRENCY-CONVERTER/"
        },
        {
            title: "SHOP",
            stack:'REACT',
            url: shop,
            description:"This website is a sample online store , where you can buy products in many categorys",
            code:"https://github.com/VirtualHornet/Shop" ,
            live:"https://virtualhornet.github.io/Shop/"   
        },
        {
            title: "PLANTS",
            stack:'REACT',
            url: plant,
            description:"The PLANTS Database provides standardized information about the vascular plants, mosses, liverworts, hornworts, and lichens of the U.S. and its territories.",
            code:"https://github.com/VirtualHornet/Plants" ,
            live:"https://virtualhornet.github.io/Plants/"  
        }
    ]
    

   const [active1, setActive1] = useState(false);
   const [active2, setActive2] = useState(false);
   const [active3, setActive3] = useState(false);
   const [active4, setActive4] = useState(false);
   const [active5, setActive5] = useState(false);
   const [active6, setActive6] = useState(false);
   const [details, setDetails] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref);
   

    const variant1=  {
        hidden: {opacity:0, x:'-50vw'},
        visible: {opacity:1, x:0},
    }

    
const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }


    const handleClick = event => {
        event.currentTarget.classList.toggle('full-screen');
        setDetails(!details)
        
        const section = document.getElementById('projects');
        const sectionTop = section.offsetTop - 90;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
          

    }


    return(
        <section id="projects" ref={ref}>
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
            >My new projects</motion.h2>
            <div className="card-container" >
                <motion.div 
                      variants={item}
                      initial="hidden"
                      animate={
                          isInView?'visible':""
                      }
                      transition={{
                          duration: 0.5
                      }}
                className={active1?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive3(!active3);
                    setActive4(!active4);
                    setActive5(!active5);
                    setActive6(!active6);
                    setActive2(!active2);

                }}> 
                    <div className='left-wrap'>
                        <h4>CURRENCY BALANCES</h4>
                        <p className='par'>REACT</p>
                        <p className={details?(props.color==="light"?"details":"details darkPar"):"none"}>CURRENCY BALANCES is a website that allows users to search for information 
                            about currency balances in real-time, and there is a possibility to check a bigger value's exchanged currency.</p>
                        <p className={details?"details":"none"}>    
                        <a href='https://github.com/VirtualHornet/CURRENCY-CONVERTER'><VscGithub></VscGithub></a>
                        <a href='https://virtualhornet.github.io/CURRENCY-CONVERTER/'>Live Demo</a>
                        </p>    
                    </div>
                   
                    <img src={currency} alt="currency"/>
                </motion.div>
                <motion.div 
                      variants={item}
                      initial="hidden"
                      animate={
                          isInView?'visible':""
                      }
                      transition={{
                          duration: 0.5,
                          delay: 0.25
                      }}
                
                className={active2?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive1(!active1);
                    setActive3(!active3);
                    setActive4(!active4);
                    setActive5(!active5);
                    setActive6(!active6);

                }}>
                <div className='left-wrap'>
                        <h4>SHOP</h4>
                        <p>REACT</p>
                        <p className={details?(props.color==="light"?"details":"details darkPar"):"none"}>This website is a sample online store , where you can buy products in many categorys</p>
                        <p className={details?"details":"none"}>    
                        <a href='https://github.com/VirtualHornet/Shop'><VscGithub></VscGithub></a>
                        <a href='https://virtualhornet.github.io/Shop/'>Live Demo</a>
                        </p>   
                    </div>
                   
                    <img src={shop} alt="shop"/>
                </motion.div>   
                <motion.div 
                     variants={item}
                     initial="hidden"
                     animate={
                         isInView?'visible':""
                     }
                     transition={{
                         duration: 0.5,
                         delay: 0.5
                     }}
                className={active3?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive1(!active1);
                    setActive2(!active2);
                    setActive4(!active4);
                    setActive5(!active5);
                    setActive6(!active6);

                }}>
                    <div className='left-wrap'>
                        <h4>PLANTS</h4>
                        <p>REACT</p>
                        <p className={details?(props.color==="light"?"details":"details darkPar"):"none"}>The PLANTS Database provides standardized information about the vascular plants, mosses, liverworts, hornworts, and lichens of the U.S. and its territories.</p>
                        <p className={details?"details":"none"}>    
                        <a href='https://github.com/VirtualHornet/Plants'><VscGithub></VscGithub></a>
                        <a href='https://virtualhornet.github.io/Plants/'>Live Demo</a>
                        </p>   
                    </div>
                    <img src={plant} alt="plant"/>
                </motion.div>
                <motion.div 
                    variants={item}
                    initial="hidden"
                    animate={
                        isInView?'visible':""
                    }
                    transition={{
                        duration: 0.5,
                        delay: 0.75
                    }}
                className={active4?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive1(!active1);
                    setActive3(!active3);
                    setActive2(!active2);
                    setActive5(!active5);
                    setActive6(!active6);

                }}>
                   <div className='left-wrap'>
                        <h4>SIMON SAYS</h4>
                        <p>REACT, Bootstrap 5</p>
                        <p className={details?(props.color==="light"?"details":"details darkPar"):"none"}>The classic SIMON SAYS game in React.</p>
                        <p className={details?"details":"none"}>    
                        <a href='https://github.com/VirtualHornet/Simon'><VscGithub></VscGithub></a>
                        <a href='https://virtualhornet.github.io/Simon/'>Live Demo</a>
                        </p>   
                    </div>
                    <img src={simon} alt="simon"/>
                </motion.div>
                <motion.div 
                    variants={item}
                    initial="hidden"
                    animate={
                        isInView?'visible':""
                    }
                    transition={{
                        duration: 0.5,
                        delay: 1
                    }}
                className={active5?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive1(!active1);
                    setActive3(!active3);
                    setActive2(!active2);
                    setActive4(!active4);
                    setActive6(!active6);

                }}>
                <div className='left-wrap'>
                        <h4>TIK TAK TOE</h4>
                        <p>REACT, Bootstrap 5</p>
                        <p className={details?(props.color==="light"?"details":"details darkPar"):"none"}>The classic TIK TAK TOE game, against computer in React.</p>
                        <p className={details?"details":"none"}>    
                        <a href='https://github.com/VirtualHornet/TikTakToe'><VscGithub></VscGithub></a>
                        <a href='https://virtualhornet.github.io/TikTakToe/'>Live Demo</a>
                        </p>   
                </div>
                   
                    <img src={tik} alt="tik"/>
                </motion.div> 
              
                <motion.div 
                    variants={item}
                    initial="hidden"
                    animate={
                        isInView?'visible':""
                    }
                    transition={{
                        duration: 0.5,
                        delay: 1.25
                    }}
                className={active6?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive1(!active1);
                    setActive2(!active2);
                    setActive4(!active4);
                    setActive5(!active5);
                    setActive3(!active3);

                }}>
                     <div className='left-wrap'>
                        <h4>CALCULATOR</h4>
                        <p>REACT, Bootstrap 5</p>
                        <p className={details?(props.color==="light"?"details":"details darkPar"):"none"}>This is a classic calculator app in React.</p>
                        <p className={details?"details":"none"}>    
                        <a href='https://github.com/VirtualHornet/Calculator'><VscGithub></VscGithub></a>
                        <a href='https://virtualhornet.github.io/Calculator/'>Live Demo</a>
                        </p>   
                    </div>
                    <img src={calculator} alt="calculator"/>
                </motion.div>     
           </div>
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
           >
            Front End Projects</motion.h2>
            <div className="card-container" >
                {data.map((item)=>{
                    return(
                        <motion.div 
                        variants={item}
                        initial="hidden"
                        animate={
                            isInView?'visible':""
                        }
                        transition={{
                            duration: 0.5,
                            delay: item.id * 0.25
                        }}
                    className={active6?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                        handleClick(event)
                        setActive1(!active1);
                        setActive2(!active2);
                        setActive4(!active4);
                        setActive5(!active5);
                        setActive3(!active3);
    
                    }}>
                         <div className='left-wrap'>
                            <h4>{item.title}</h4>
                            <p>{item.stack}</p>
                            <p className={details?(props.color==="light"?"details":"details darkPar"):"none"}>{item.description}</p>
                            <p className={details?"details":"none"}>    
                            <a href={item.code}><VscGithub></VscGithub></a>
                            <a href={item.live}>Live Demo</a>
                            </p>   
                        </div>
                        <img src={item.url} alt={item.id}/>
                    </motion.div>     
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;