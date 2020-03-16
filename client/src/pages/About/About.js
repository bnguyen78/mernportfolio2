import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import './About.css'
import profilepic1 from './assets/profilepic1.png'

const About = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper id="paperAbout" variant="outlined" elevation={3}>

      <h1><b>About Me</b></h1>

    <img src={profilepic1} id="profile" alt="bryant"/>
      <p>Hello and welcome to my page! Thank you for checking me out!
      <br />
      <br />  
      Throughout my life, I have always been up to any challenge, whether that be trying out
    new things such as extreme sports or eating food not in the norm. I love to pick up difficult and challenging activities.
    I even learned a bit of Spanish and Japanese for fun. However, it wasn't until I had a taste of coding that I've been motivated more than ever!
    Having the ability to build something from the ground up as a full stack developer is exhilerating! 
    <br />
    <br />
    After finishing the Full Stack Coding Bootcamp at UCI, I am excited to start my next journey and dive into the world of coding.
    I have strong experience in building MERN stack applications and understand React using hooks and smart components. I
  am also looking to learn C#, C++ and Python. I am looking to join a company to gain more experience and help assist in improving performance via code.
    </p>

      </Paper>
  </React.Fragment>
  )
}

export default About