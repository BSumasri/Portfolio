import React from 'react';
import './intro.css';
import bg from '../../assets/background.png'
import{Link} from 'react-scroll';
import btnImg from '../../assets/Gmail.png'

const Intro =() => {
    return(
        <setion id ="intro">
                 <div className='introContent'>
                    <span className='hello'>Hello,</span>
                    <span className='introText'> I'm <span className='introName'>Basava Sumasri</span> <br />Full Stack Developer</span>
                    <p className='introPara'>Full Stack Developer building scalable web applications and intelligent AI-driven solutions.Focused on combining backend reliability, clean frontend design, and data-driven systems to solve real-world problems.</p> 
                    
                    <Link><button className='btn'><img src={btnImg} alt='hireme' className='btnImg'/>  sumasribasava@gmail.com</button> </Link>
                 </div>
                 <img src={bg} alt='profile'className='bg'/>
        </setion>
    )
}

export default Intro