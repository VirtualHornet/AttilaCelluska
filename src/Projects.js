import './Projects.css';
import {useState} from 'react'
import currency from './img/elso.png';
import tik from './img/tik.png';
import simon from './img/simon.png';
import media from './img/mediawiki.png';
import weather from './img/weather.png';
import calculator from './img/calculator.png';
import { VscGithub } from "@react-icons/all-files/vsc/VscGithub";
function Projects (props){

   const [active1, setActive1] = useState(false);
   const [active2, setActive2] = useState(false);
   const [active3, setActive3] = useState(false);
   const [active4, setActive4] = useState(false);
   const [active5, setActive5] = useState(false);
   const [active6, setActive6] = useState(false);
   const [details, setDetails] = useState(false);





    const handleClick = event => {
        event.currentTarget.classList.toggle('full-screen');
        setDetails(!details)
        
          

    }


    return(
        <section id="projects">
            <h2>My new projects</h2>
            <div className="card-container" >
                <div className={active1?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive3(!active3);
                    setActive4(!active4);
                    setActive5(!active5);
                    setActive6(!active6);
                    setActive2(!active2);

                }}> <div className='left-wrap'>
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
                </div>
                <div className={active2?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive1(!active1);
                    setActive3(!active3);
                    setActive4(!active4);
                    setActive5(!active5);
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
                </div>   
                <div className={active3?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive1(!active1);
                    setActive2(!active2);
                    setActive4(!active4);
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
                </div>
                <div className={active4?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive1(!active1);
                    setActive3(!active3);
                    setActive2(!active2);
                    setActive5(!active5);
                    setActive6(!active6);

                }}>
                    <div className='left-wrap'>
                        <h4>MEDIAWIKI</h4>
                        <p>REACT</p>
                        <p className={details?(props.color==="light"?"details":"details darkPar"):"none"}>This website works like Wikipedia, 
                        and also you can search for random words to.</p>
                        <p className={details?"details":"none"}>    
                        <a href='https://github.com/VirtualHornet/MediaWiki'><VscGithub></VscGithub></a>
                        <a href='https://virtualhornet.github.io/MediaWiki/'>Live Demo</a>
                        </p>   
                    </div>
                    <img src={media} alt="media"/>
                </div>
                <div className={active5?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive1(!active1);
                    setActive3(!active3);
                    setActive4(!active4);
                    setActive2(!active2);
                    setActive6(!active6);

                }}>
                      <div className='left-wrap'>
                        <h4>LOCAL WEATHER</h4>
                        <p>REACT</p>
                        <p className={details?(props.color==="light"?"details":"details darkPar"):"none"}>In this website you can find the current weather data on your location. </p>
                        <p className={details?"details":"none"}>    
                        <a href='https://github.com/VirtualHornet/MediaWiki'><VscGithub></VscGithub></a>
                        <a href='https://virtualhornet.github.io/MediaWiki/'>Live Demo</a>
                        </p>   
                    </div>
                    <img src={weather} alt="weather"/>
                </div>
                <div className={active6?"none":(props.color==="light"?"card":"card darkbackground")} onClick={function(event){ 
                    handleClick(event)
                    setActive1(!active1);
                    setActive3(!active3);
                    setActive4(!active4);
                    setActive5(!active5);
                    setActive2(!active2);
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
                </div>          
            </div>
        </section>
    )
}

export default Projects;