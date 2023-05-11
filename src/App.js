import About from './pages/About';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { useState } from 'react';
import {motion} from'framer-motion';  
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <motion.div
    animate= {{opacity:1}}
    initial = {{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
  > 
    <div className={isDarkMode?"light":"dark"}>

      <div className='style-switcher'>
         <button className='style-switcher' onClick={handleToggle}>
          <span>{isDarkMode ? '🌞' : '🌙'}</span> 
        </button>     
      </div>
     
     <Home color={isDarkMode?"light":"dark"}/>
     <About color={isDarkMode?"light":"dark"}/>
     <Projects color={isDarkMode?"light":"dark"}/>
     <Contact color={isDarkMode?"light":"dark"}/>
     <Footer/>
    </div>
    </motion.div>
  );
}

export default App;
