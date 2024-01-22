import React from 'react';
import { useState } from 'react';
import './App.css';
import dp from './assets/dp.jpg'





function sendEmail() {
  window.location.href = 'mailto:amalkrishnam3@gmail.com';
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className='wrapper'>
        <a href='https://www.amalmullangath.tech/' className='logo'>Amal Krishna M U </a>
        <nav>
          <ul>
           <li><a href='https://www.amalmullangath.tech/#/its'> Home</a></li>
            <li><a href='#about'> About</a></li>
            <li><a href='#projects'> Projects</a></li>
          </ul>
        </nav>
      </header>
      <div id='home'>

        <img src={dp} alt='profile picture' /> 
  
        </div>

      <div id='about' className='about'>
        <h1 className='hero-left'> Hello, I'm Amal</h1>
        <p className='intro'>
          I am a passionate and dedicated individual currently pursuing a <b>  Bachelor of Technology in 
          Information Technology</b> at 
          <b> Cochin University College of Engineering Kuttanad (CUSAT)</b>. 
          With a strong background in technology and a desire to explore new possibilities,
           I aim to contribute to innovative projects and enhance my skills in software development.
        </p>
        <ul>
          <li>Linkedin: <a href='https://www.linkedin.com/in/amal-krishna-m-u-4055a1185/' target='_blank_'>Amal Krishna M U </a></li>
          <li>Github: <a href='https://github.com/amal-krishna-m-u' target='_blank_'>Amal Krishna M U</a></li>
        </ul>
      </div>



      <div id = 'projects' className='project'>


        <h1 className='project-h1'> These are my projects</h1>

              <ul>
                <li className='card'>
                  <h3>StethoConnect</h3>
                <p> StethoConnect is an <b> affordable digital stethoscope</b> designed for students and individuals who cannot access costly medical equipment. 
                  Featuring an <b> integrated AI system</b>, it enables users, including non-professionals, to conduct preliminary health analyses. 
                  The project utilized<s>  React-js</s> for the user interface, <s> Python3 </s>for backend logic, <s> Seeed Studio XIAO nRF52840 Sense</s> for hardware, <s> Edge-Impulse </s>for machine learning integration, 
                  and <s> Azure for cloud services</s>. <b> StethoConnect aims to democratize basic healthcare diagnostics</b>, making it accessible to a broader population. </p>
                
                
          For more details visit - <a href='https://stethoconnetv1.netlify.app' target='_blank_'>StethoConnect.tech </a>
                </li>
                <li className='card'>
  <h3>Team One Employee Management System</h3>
  <p>Team One Employee Management System is a  Flutter application developed for <b> TeamOne Events Management</b>. 
    This application streamlines event management operations by facilitating communication with daily wage employees,
     creating wage bills, monitoring rental stock, updating event status, and<b>  automating bill generation for employees and clients after completion of the event</b>.
      Built with <s> Flutter</s> and powered by <s> <a href='https://supabase.com/' target='_blank_'> Supabase</a></s> for database and authentication, the employee version is <b> available on the Amazon Appstore</b>.
       <i> While currently not in use due to internal changes</i>, during its active period, the application significantly enhanced efficiency, 
       saving up to <b>  50% </b>of time compared to previous methods. Records were efficiently managed and updated, providing timely information to employees. </p>

  For more details visit - <a href='https://www.amazon.com/gp/product/B0CH4ZBF1D' target='_blank_'>TeamOne Event Management </a>
</li>

<li className='card'>
  <h3>GST-bill-generator</h3>
  <p>GST-bill-generator is a <s>React-based</s> application developed for learning purposes. It operates as a bill generator, leveraging React libraries and local storage for data storage. 
    The application allows users to add categories, define GST percentages for those categories, and add items within those categories. 
    Users can generate bills for the added items and print them. Throughout the project, an emphasis was placed on <b> documenting the code</b> and creating <b> meaningful commit messages</b> following the standard semantic versioning (<b>semver</b>) conventions. 
    Check out the <b>GitHub repository</b> for this project for more details.</p>

  For more details visit - 
  site: <a className='spaceit' href='https://invoice-gst-generator.netlify.app/'target='_blank_'>
    Gst-Invoice generator
  </a>

   Repo: <a className ='spaceit' href='https://github.com/amal-krishna-m-u/invoiceGenerator.git' target='_blank_'>invoiceGenerator</a>
</li>


<li className='card'>
  <h3>Clipit V01</h3>
  <p>Clipit V01 is a <b> CLI Python tool</b> that I created for fun. It simplifies the process of storing and accessing values in the clipboard using key-value pairs through a set of commands in the command line. 
  This project, completed in just one hour, combines the power of <s> Python</s> and some<s> Bash </s>scripting to provide a <b> quick and practical solution for managing clipboard data</b>.
   It allows users to store values with ease and retrieve them whenever needed.</p>

  For more details visit - <a href='https://github.com/amal-krishna-m-u/clipit.git'>Clipit V01 on GitHub</a>
</li>
              </ul>


<h3> For more Projects visit my github profile</h3>


      </div>
    </>
  );
}

export default App;
