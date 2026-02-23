import React from 'react';
import './profjourny.css';

const ProfJourney =() => {
    return (

   <section class="experience-section">
   
   <h1 className="projectTitle1">Professional <span>Journey</span></h1>


   {/* Experience */}
    <h1 class="section-title">
        <span class="accent-line"></span> Experience
    </h1>

    <div class="timeline">

        <div class="timeline-item">
            <div class="timeline-left">
                <span class="timeline-dot blue"></span>
                <p class="timeline-date">December-2025 – Present</p>
                <p class="timeline-company">Edunet Foundation</p>
                 <p className='timeline-place'>Online</p>
            </div>

            <div class="timeline-right">
                <h2>Artificial Intelligence Intern</h2>
                <p className='timeline-passage'>Building AI-driven applications and integrating ML models into web systems.</p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-left">
                <span class="timeline-dot purple"></span>
                <p class="timeline-date">June 2024 – July 2024</p>
                <p class="timeline-company">SlashMark IT Startup</p>
                 <p className='timeline-place'>Online</p>
            </div>

            <div class="timeline-right">
                <h2>Full Stack Developer Intern</h2>
                <p className='timeline-passage'>Developed responsive UI and improved user interaction experience.</p>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-left">
                <span class="timeline-dot purple"></span>
                <p class="timeline-date">August 2022 – December2022</p>
                <p class="timeline-company">Efftronics Systems Pvt. Ltd.</p>
                 <p className='timeline-place'>Mangalagiri, AndhraPradesh</p>

                
            </div>

            <div class="timeline-right">
                <h2>Zabbix and Zoho analysis Intern</h2>
                <p className='timeline-passage'>Developed responsive UI and improved user interaction experience.</p>
            </div>
        </div>

    </div>

    {/* Education */}
    <h1 class="section-title education-title">
        <span class="accent-line"></span> Education
    </h1>

    <div class="timeline">

        <div class="timeline-item">
            <div class="timeline-left">
                <span class="timeline-dot green"></span>
                <p class="timeline-date"> June 2023 – Present</p>
                <p class="timeline-company">Sri Padmavathi Mahila Visvavidyalayam</p>
                <p className='timeline-place'>Tirupati, AndhraPradesh</p>
            </div>

            <div class="timeline-right">
                <h2>Bachelor of Technology</h2>
                <h3 className='timeline-branch'>Computer Science and Engineering</h3>
                <p className='timeline-grade'>Grade - 8.0 CGPA (till 7th Semister)</p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-left">
                <span class="timeline-dot green"></span>
                <p class="timeline-date">June 2020 – Apirl 2023</p>
                <p class="timeline-company">Diviseema Polytechnic College</p>
                <p className='timeline-place'>Avanigadda, AndhraPradesh</p>
            </div>

            <div class="timeline-right">
                <h2>Diploma</h2>
                <h3 className='timeline-branch'>Computer Engineering</h3>
                <p className='timeline-grade'>Percentage - 92.62%</p>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-left">
                <span class="timeline-dot green"></span>
                <p class="timeline-date"> June 2019 – April 2020</p>
                <p class="timeline-company">S S Mahitha Public School</p>
                <p className='timeline-place'>Vijayawada, AndhraPradesh</p>
            </div>

            <div class="timeline-right">
                <h2>Secendary School Certificate</h2>
                <p className='timeline-grade1'>Percentage - 93.83%</p>
            </div>
        </div>

    </div>

</section>
    )}

export default ProfJourney;