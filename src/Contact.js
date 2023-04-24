
import './Contact.css';
import { GiPositionMarker } from 'react-icons/gi';
import { AiFillGithub,AiOutlineMail } from 'react-icons/ai';
import emailjs from '@emailjs/browser';




function Contact (props){
 

    const submitHandler = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_fn45x9k', 'template_ttme01o', e.target, '5HGcgq5Y91SqFkQg8')
        .then((res)=>{
            alert(res.text);
        },(error)=>{
            console.log(error.text)
        });
    }

    return(
        <section id="contact" className={(props.color==="light")?"":"darkbackground"}>
            <div className="shadow">
            <div className="email">
                <h2>Get in touch</h2>
                <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col">
                            <label for="name">NAME:</label> 
                        </div>
                        <div className="col">
                              <label for="email">EMAIL:</label>
                        </div>
                    </div>
                   
                    <br></br>
                    <div className="col-row">
                        <div className="col">
                            <input type="text" name="name" id="name" placeholder="Name"/>
                        </div>
                        <br></br>
                        <div className="col">
                            <input type="email" name="email" id="email"  placeholder="Email" />
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <label for="subject">SUBJECT:</label>
                    </div>
                    
                    <br></br>
                    <div className="row">
                        <input type="text" name="subject" id="subject" placeholder="Subject"/>
                    </div>
                 
                    <br></br>
                    <div className="row">
                          <label for="message" id="message">MESSAGE:</label>
                    </div>
                  
                    <br></br>
                        <textarea name="message" cols="30" rows="10"  placeholder="Message"></textarea>
                    
                    <div className="row">
                        <button>Send</button>
                    </div>
                    
                </form>
            </div>
            <div className="info">
                <div className="info-container">
                    <h2>Let's Get in touch</h2>
                    <p>I'm open for any suggestion or just to have a chat</p>
                    <div className="row">
                        <p> <GiPositionMarker/> Bajsanki put 5th, 24300 Backa Topola, Serbia </p>
                    </div>
                    <br></br>
                    <div className="row">
                       <p> <AiOutlineMail/> attilacelluska@gmial.com</p>
                    </div>
                    <br></br>
                    <div className="row">
                        <p> <AiFillGithub/> <a href='https://github.com/VirtualHornet?tab=repositories'>https://github.com/VirtualHornet?tab=repositories</a></p>
                    </div>
                    <br></br>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contact;