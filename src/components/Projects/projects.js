import React from 'react';
import './projects.css';
import OnlineBS from '../../assets/OnlinebankingSystem.png';
import Tiktak from '../../assets/Tik_Tak_Toe.png';
import LogIn from '../../assets/login_Page.png';
import Tastybite from '../../assets/Tastey_Bite.png';
import EmpMngSys from '../../assets/Emp_Mng_Sys.png';
import portfolio from '../../assets/Portfolio_Website.png';
import landiingpage from '../../assets/Landing_Page.png';
import Moviereview from '../../assets/Movie_Review.png';
import pdfreader from '../../assets/Pdf_Reader.png';

const Projects =() => {
    return (

    <section id="projects">

    <h1 className="projectTitle">Projects <span>Work</span></h1>

    {/* FULL STACK PROJECTS */}
    <div className="projectCategory">
        <h2>Full Stack Projects</h2>

        <div className="projectGrid">

            <div className="projectCard">
                <img src={Tiktak} alt="project1" className='ProjectcardImg' />
                <h3>Tik Tak Toe</h3>
                <div className="techStack">
                    
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>JavaScript</span>
                     
                 </div>
                 <div className="projectLinks">
                     <a href="https://github.com/BSumasri/Tic_Tak_Toe" target="_blank" rel="noopener noreferrer"className="githubLink"> 
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"alt="GitHub"/>View code
                     </a>
                  </div>
        </div>

            <div className="projectCard">
                <img src={LogIn} alt="project2" />
                <h3>Simple LogIn Page</h3>
                <div className="techStack">
                    
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>React</span>
                 </div>

                  <div className="projectLinks">
                     <a href="https://github.com/BSumasri/React_Login_Page" target="_blank" rel="noopener noreferrer"className="githubLink"> 
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"alt="GitHub"/>View code
                     </a>
                  </div>
            </div>
        
        </div>
        <div className="projectGrid">
            <div className="projectCard">
                <img src={Tastybite} alt="project1" className='ProjectcardImg' />
                <h3>Tasty Bite</h3>
                <div className="techStack">
                    <span>HTML</span>
                     <span>CSS</span>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/BSumasri/TastyBite_Webpage" target="_blank" rel="noopener noreferrer"className="githubLink"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"alt="GitHub"/>View code
                    </a>
                  </div>
            </div>

            <div className="projectCard">
                <img src={EmpMngSys} alt="project1" className='ProjectcardImg' />
                <h3>Employee Management System</h3>
                <div className="techStack">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Python</span>
                    <span>Flask</span>
                    <span>MySQL</span>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/BSumasri/Emplyoee_Management" target="_blank" rel="noopener noreferrer"className="githubLink"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"alt="GitHub"/>View code
                    </a>
                  </div>
            </div>
        
        </div>

        <div className="projectGrid">
            <div className="projectCard">
                <img src={OnlineBS} alt="project1" className='ProjectcardImg' />
                <h3>Online Banking System</h3>
                <div className="techStack">
                    <span>HTML</span>
                     <span>CSS</span>
                     <span>PHP</span>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/BSumasri/Online_Banking_System" target="_blank" rel="noopener noreferrer"className="githubLink"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"alt="GitHub"/>View code
                    </a>
                  </div>
            </div>

            <div className="projectCard">
                <img src={portfolio} alt="project1" className='ProjectcardImg' />
                <h3>Simple Portfolio Website</h3>
                <div className="techStack">
                    <span>HTML</span>
                    <span>CSS</span>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/BSumasri/Porfolio_Website" target="_blank" rel="noopener noreferrer"className="githubLink"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"alt="GitHub"/>View code
                    </a>
                  </div>
            </div>
        
        </div>


        <div className="projectGrid">
            <div className="projectCard">
                <img src={landiingpage} alt="project1" className='ProjectcardImg' />
                <h3>Simple Landing Page</h3>
                <div className="techStack">
                    <span>HTML</span>
                    <span>CSS</span>
                    
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/BSumasri/SlashMark_LandingPage" target="_blank" rel="noopener noreferrer"className="githubLink"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"alt="GitHub"/>View code
                    </a>
                  </div>
            </div>

            <div className="projectCard">
                <img src="" alt="" className='' />
                <h3></h3>
                <div className="">
                    <span></span>
                    <span></span>
                </div>
                <div className="">
                    <a href="#" target="" rel=""className=""> 
                    <img src=""alt=""/>
                    </a>
                  </div>
            </div>
        </div>
    </div>
    

    {/* AI PROJECTS */}
    <div className="projectCategory">
        <h2>AI Projects</h2>

        <div className="projectGrid">
            <div className="projectCard">
                <img src={Moviereview} alt="ai1" />
                <h3>Movie Review Sentiment Analyzer</h3>
                <div className="techStack">
                     <span>Python</span>
                     <span>Streamlit</span>
                     <span>Deep Neural Networks</span>
                 </div>
                  <div className="projectLinks">
                     <a href="https://github.com/BSumasri/Movie_Review_Sentiment_Analyzer" target="_blank" rel="noopener noreferrer"className="githubLink"> 
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"alt="GitHub"/>View code
                     </a>
                  </div>
            </div>

            <div className="projectCard">
                <img src={pdfreader}alt="ai2" />
                <h3>PDF Reader</h3>
                <div className="techStack">
                     <span>Python</span>
                     <span>Streamlit</span>
                     <span>Deep Neural Networks</span>
                     <span>pypdf</span>
                 </div>
                  <div className="projectLinks">
                     <a href="https://github.com/BSumasri/PDF_Reader" target="_blank" rel="noopener noreferrer"className="githubLink"> 
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"alt="GitHub"/>View code
                     </a>
                  </div>
            </div>
        </div>
    </div>

</section>
    )
}
export default Projects;