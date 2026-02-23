
import './contact.css';

import linked from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yt2f372', 'template_lcafatm', form.current, 'W2I20TMhhGN9ZCp-a')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
    
                <h1 className="contactPageTitle">Contact <span> Me</span></h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href='https://www.linkedin.com/in/sumasri-basava/'><img src={linked} alt="LinkedIn" className="link" /></a>
                       <a href='https://github.com/BSumasri/'> <img src={github} alt="GitHub" className="link" /></a>
                       <a href='https://www.instagram.com/miss_fierce_mind/'> <img src={instagramIcon} alt="Instagram" className="link" /></a>
                    </div>
                </form>
            
        </div>
    );
}

export default Contact;