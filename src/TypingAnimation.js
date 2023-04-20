import React, { Component } from 'react';
import Typed from 'typed.js';
import './TypingAnimation.css'

class TypingAnimation extends Component {
  componentDidMount() {
   
    const options = {
        strings:["Front End Developer","Web Developer","Software Engineer"],
        typeSpeed: 100,
        BackSpeed: 60,
        loop: true
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    
    this.typed.destroy();
  }

  render() {
    return <span className='anime' ref={el => (this.el = el)} />;
  }
}

export default TypingAnimation;
