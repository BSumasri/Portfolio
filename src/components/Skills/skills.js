import React from 'react';
import './skills.css';
import WebDesigner from '../../assets/website-design.png';
import AiAppDesigner from '../../assets/AI_Application_Developer.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/javascript.png';
import react from '../../assets/React.png';
import php from '../../assets/Php.png';
import mysql from '../../assets/Mysql.png';
import python from '../../assets/Python.png';
import flask from '../../assets/Flask.png';
import streamlit from '../../assets/Streamlit.png';
import docker from '../../assets/Docker.png';
import tensorflow from '../../assets/TensorFlow.png';

const Skills =() => {
    return(
        <section id='skills'>
           <span className='skillTitle'>About</span>
           <span className='skillDesc'> I design and develop end-to-end web applications with a strong focus on structure, performance, and usability. My work combines frontend design with backend logic to build complete, functional systems. Alongside full stack development, I explore AI and machine learning to create intelligent, data-driven applications. I am focused on building practical solutions that deliver real impact.</span>
            <span className='skillTitle2'>What <span>I do</span></span>
           <div className='skillBars'>
              <div className='skillBar'>
                   <img src={WebDesigner} alt='WebDesigner' className='skillBarImg'/>
                   <div className='skillBarText'>
                     <h2>Full Stack Development</h2>
                     <p>I build complete web applications from frontend interfaces to backend systems and databases. My focus is on clean UI design, structured code, secure data handling, and scalable architecture.</p>
                   </div>
              </div>
              <div className='skillBar'>
                   <img src={AiAppDesigner} alt='AiAppDesigner' className='skillBarImg2'/>
                   <div className='skillBarText'>
                     <h2>AI-Driven Applications</h2>
                     <p>I develop intelligent applications by integrating machine learning models with real-world software systems. My focus is on creating data-driven solutions that automate decisions and solve practical problems.</p>
                   </div>
              </div>
           </div>
  <section className="skills-section">
  <h2 className="skills-title">Technologies and Tools</h2>

  <div className="skills-marquee">
    <div className="skills-track">

      <div className="skill-card">
        <img src={html} alt="HTML" />
        <span>HTML</span>
      </div>

      <div className="skill-card">
        <img src={css} alt ="CSS" />
        <span>css</span>
      </div>

      <div className="skill-card">
        <img src={js} alt="JavaScript" />
        <span>IavaScript</span>
      </div>

      <div className="skill-card">
        <img src={react} alt="React" />
        <span>React</span>
      </div>
      <div className="skill-card">
        <img src={php} alt="PHP" />
        <span>PHP</span>
      </div>

      <div className="skill-card">
        <img src={mysql} alt="MYSQL" />
        <span>MySQL</span>
      </div>

      {/* Duplicate skills for smooth infinite effect */}
      <div className="skill-card">
        <img src={python} alt="Python" />
        <span>Python</span>
      </div>

      <div className="skill-card">
        <img src={flask} alt="Flask" />
        <span>Flask</span>
      </div>
            <div className="skill-card">
        <img src={streamlit} alt="Sreamlit" />
        <span>Streamlit</span>
      </div>
      <div className="skill-card">
        <img src={docker} alt="Docker" />
        <span>Docker</span>
      </div>
      <div className="skill-card">
        <img src={tensorflow} alt="TensorFklow" />
        <span>TensorFlow</span>
      </div>

      <div className="skill-card">
        <img src={html} alt="HTML" />
        <span>HTML</span>
      </div>

      <div className="skill-card">
        <img src={css} alt ="CSS" />
        <span>css</span>
      </div>

      <div className="skill-card">
        <img src={js} alt="JavaScript" />
        <span>IavaScript</span>
      </div>

      <div className="skill-card">
        <img src={react} alt="React" />
        <span>React</span>
      </div>
      <div className="skill-card">
        <img src={php} alt="PHP" />
        <span>PHP</span>
      </div>

      <div className="skill-card">
        <img src={mysql} alt="MYSQL" />
        <span>MySQL</span>
      </div>

      {/* Duplicate skills for smooth infinite effect */}
      <div className="skill-card">
        <img src={python} alt="Python" />
        <span>Python</span>
      </div>

      <div className="skill-card">
        <img src={flask} alt="Flask" />
        <span>Flask</span>
      </div>
            <div className="skill-card">
        <img src={streamlit} alt="Sreamlit" />
        <span>Streamlit</span>
      </div>
      <div className="skill-card">
        <img src={docker} alt="Docker" />
        <span>Docker</span>
      </div>
      <div className="skill-card">
        <img src={tensorflow} alt="TensorFklow" />
        <span>TensorFlow</span>
      </div>

      

    </div>

    
  </div>

  
</section>
       </section>

         )
}

export default Skills;