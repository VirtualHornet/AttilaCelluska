import './Navbar.css';
import { FaTimes, FaBars } from 'react-icons/fa';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navbar (props){

   
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('');
    

  
    
    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('section');
          const currentScrollPos = window.pageYOffset;
    
          sections.forEach(section => {
            const sectionTop = section.offsetTop - 90;
            const sectionBottom = sectionTop + section.offsetHeight;
    
            if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
              setActiveMenuItem(section.getAttribute('id'));
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    const handleMenuItemClick = (id) => {
        setActiveMenuItem(id);
        const section = document.getElementById(id);
        const sectionTop = section.offsetTop - 90;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      };
    const handleHamMenuItemClick = (id) => {
        setActiveMenuItem(id);
        setClick(!click);
       
        const section = document.getElementById(id);
        const sectionTop = section.offsetTop - 90;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    };
    

    const handleClick = () =>{
        setActiveMenuItem('');
        setClick(!click);
      
    }
    const changeNavbarColor = () =>{
        if(window.scrollY >= 100){
            setColor(true);
        }
        else{
            setColor(false);
        }
     };
     window.addEventListener('scroll', changeNavbarColor);


    return (
        /*-- Navbar Start  ----------*/

        <nav className={(props.color==="light")?"container":"container scroll"}>
          <div className={color ? 'navbar scroll' : 'navbar'}>
            <div className="logo">
            <Link to="/home"><a href="#home"><span>A</span>ttila </a></Link>
            </div>
            <ul className="nav">
            <li className={activeMenuItem === 'home' ? 'active' : ''} onClick={() => handleMenuItemClick('home')}><Link to="/AttilaCelluska/home"><a><span>&lt;</span>Home<span>/&gt;</span></a></Link></li>
            <li className={activeMenuItem === 'about' ? 'active' : ''} onClick={() => handleMenuItemClick('about')}><Link to="/AttilaCelluska/about"><a><span>&lt;</span>About<span>/&gt;</span></a></Link></li>
            <li className={activeMenuItem === 'projects' ? 'active' : ''} onClick={() => handleMenuItemClick('projects')}><Link to="/AttilaCelluska/projects"><a><span>&lt;</span>Projects<span>/&gt;</span></a></Link></li>
            <li className={activeMenuItem === 'contact' ? 'active' : ''} onClick={() => handleMenuItemClick('contact')}><Link to="/AttilaCelluska/contact"><a><span>&lt;</span>Contact<span>/&gt;</span></a></Link></li>
            </ul>        
            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click? "ham-nav":'none'}>
            <li className={activeMenuItem === 'home' ? 'active' : ''} onClick={() => handleHamMenuItemClick('home')}><Link to="/AttilaCelluska/home"><a><span>&lt;</span>Home<span>/&gt;</span></a></Link></li>
            <li className={activeMenuItem === 'about' ? 'active' : ''} onClick={() => handleHamMenuItemClick('about')}><Link to="/AttilaCelluska/about"><a><span>&lt;</span>About<span>/&gt;</span></a></Link></li>
            <li className={activeMenuItem === 'projects' ? 'active' : ''} onClick={() => handleHamMenuItemClick('projects')}><Link to="/AttilaCelluska/projects"><a><span>&lt;</span>Projects<span>/&gt;</span></a></Link></li>
            <li className={activeMenuItem === 'contact' ? 'active' : ''} onClick={() => handleHamMenuItemClick('contact')}><Link to="/AttilaCelluska/contact"><a><span>&lt;</span>Contact<span>/&gt;</span></a></Link></li>
            <li><div className="ham-icon" onClick={handleClick}>
               <FaTimes></FaTimes>
            </div></li>
            </ul> 
          </div>
          
         
         
        
          </nav>

       
     
      
      /*-----------Hamburger Menu End----------- */ 
        )
}

export default Navbar;