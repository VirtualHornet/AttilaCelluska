import About from './pages/About';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { useState } from 'react';
import {motion} from'framer-motion';  
import Footer from './components/Footer';
import useScrollSpinner from '@dan-pugsley/react-scroll-spinner';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  }

  /*TODO 
    -spinning text around the sun icon
    -picture follow the mouse on move
    -open animation
    -background nonfigurative
    -content check, add normal description etc
    -use framer program

  */

  const { spinnerRef, setSpinnerScroll } = useScrollSpinner();
  return (
    <div onScroll={e => setSpinnerScroll(e.target.scrollTop)}> 
    <div className={isDarkMode?"light":"dark"}>

      <div className='style-switcher'>
         <button className='style-switcher' onClick={handleToggle}>
          <span>{isDarkMode ? '🌞' : '🌙'}</span>   
          <div ref={spinnerRef}>Spinning element</div>
        </button>     
      </div>
      https://framer.com/m/framer/ArcText.js
    
     
     <Home color={isDarkMode?"light":"dark"}/>
     <About color={isDarkMode?"light":"dark"}/>
     <Projects color={isDarkMode?"light":"dark"}/>
     <Contact color={isDarkMode?"light":"dark"}/>
     <Footer/>
    </div>
    </div>
  );
}

export default App;
