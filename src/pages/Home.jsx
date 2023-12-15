import './Home.css';
import Navbar from '../components/Navbar';
import prof from '../img/CV.png';
import { Link } from 'react-router-dom';
import TypingAnimation from '../components/TypingAnimation'; 
import { useRef } from 'react';
import {motion, useInView} from 'framer-motion';

function Home (props){
 
  const ref= useRef(null);
  const isInView = useInView(ref);

  const variant1=  {
    hidden: {opacity:0, x:'-50vw'},
    visible: {opacity:1, x:0},
}

const variant2=  {
  hidden: {opacity:0, x:'50vw'},
  visible: {opacity:1, x:0},
}



    return(<section id='home' className={(props.color==="light")?"light":"dark"} ref={ref}>
        <Navbar color={props.color}/>
          <div className="row">
            <motion.div 
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
            
            className="home-info">
              <h3>Hello, my name is <span className="name"><strong>A</strong>ttila <strong>C</strong>elluska</span></h3>
              <img id="mini" src={prof} alt="Prof" />
              <h3 class="my-profession">I'm a <TypingAnimation /></h3>
              <Link to="/Portfolio.pdf" target="_blank" download><button id="btn-cv">Download CV</button></Link>
            </motion.div>
            <motion.div 
              variants={variant2}
              initial="hidden"
              animate={
                  isInView?'visible':""
              }
              transition={{
                  duration: 1
              }}
            className="home-img">
               <img src={prof} alt="Prof" />
            </motion.div>
          </div>
      </section>
    )

}

export default Home ;