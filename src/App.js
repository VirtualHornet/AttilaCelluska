import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import { useState } from 'react';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
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
    </div>
  );
}

export default App;
