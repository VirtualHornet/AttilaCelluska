import './Home.css';
import Navbar from './Navbar';
import prof from './img/CV.png';

function Home (props){
    return(<section id='home' className={(props.color==="light")?"light":"dark"}>
        <Navbar color={props.color}/>
          <div className="row">
            <div className="home-info">
              <h3>Hello, my name is <span className="name">Attila Celluska</span></h3>
              <h3 class="my-profession">I'm a <span class="typing"></span></h3>
              <p className={(props.color==="light")?"lightP":"darkP"}>I'm a software engineer student.I'm a web developer and this is my portfolio website.</p>
              <button id="btn-cv">Download CV</button>
            </div>
            <div className="home-img">
               <img src={prof} alt="Prof" />
            </div>
          </div>
      </section>
    )

}

export default Home ;