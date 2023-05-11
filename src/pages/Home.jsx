import './Home.css';
import Navbar from '../components/Navbar';
import prof from '../img/CV.png';
import { Link } from 'react-router-dom';
import TypingAnimation from '../components/TypingAnimation'; 

function Home (props){
 
 

    return(<section id='home' className={(props.color==="light")?"light":"dark"}>
        <Navbar color={props.color}/>
          <div className="row">
            <div className="home-info">
              <h3>Hello, my name is <span className="name"><strong>A</strong>ttila <strong>C</strong>elluska</span></h3>
              <img id="mini" src={prof} alt="Prof" />
              <h3 class="my-profession">I'm a <TypingAnimation /></h3>
              <Link to="/Portfolio.pdf" target="_blank" download><button id="btn-cv">Download CV</button></Link>
            </div>
            <div className="home-img">
               <img src={prof} alt="Prof" />
            </div>
          </div>
      </section>
    )

}

export default Home ;