import React from 'react';
import {Spring} from 'react-spring/renderprops';

function App() {
  return (
    <Spring
      from={{opacity: 0 }}
      to={{opacity: 1 }}
      delay={800}
    >
    {props => (
      <div style={props} className="right">
      <h1 style={props2}>About Me</h1>
      <p>Hey there! My name is Syed Abdul Wadood, I am an engineering student who loves to solve difficult problems using my technical toolset and communication skills. <l style={ hStyle }>I am currently looking for a Summer 2021 internship.</l></p>
      <p className="italic">I am experienced in Java, C, and JavaScript</p>
      <h1 style={{ height: '1.5rem' }}>Work Experience</h1>
      <h2>Alpha Coding</h2>
      <p2>December 2019 — September 2020</p2>
      <p>Created course curriculum for students using moodle.</p>
      <p>Taught advanced JavaScript and Python concepts including Object Oriented Programming and Natural Language Processing.</p>
      <h2>Ryerson AI</h2>
      <p2>December 2019 — September 2020</p2>
      <p>Developed <l style={ hStyle }>RyersonAI's App</l> with React Native, Typescript, GitLab and Figma</p>
      <p>Gathered requirements, designed the solution architecture, and worked with a team of developers.</p>
      <h2>Andie.Work</h2>
      <p2>December 2020 — May 2021</p2>
      <p>Assisted with the development of the <l style={ hStyle }>Andie app</l> with React Native</p>
      <p>Worked with ReactJS to develop the front-end and Django to develop the server side. </p>
      <p>Used BitBucket for collaboration and CI/CD.</p>
      <h1 style={{ height: '1.5rem' }}>Projects</h1>
      <h2>Chirper</h2>
      <p2>August 2020<a target="_blank" href="https://github.com/4bdulWadood/ChirperSocialMedia"><button className = "button">Project</button></a><a target="_blank" href="https://www.youtube.com/watch?v=rxy0JVqLVO0&feature=youtu.be"><button className = "button">Demo</button></a></p2>
      <p>Developed a twitter clone using ReactJS, Express, NodeJS, and MongoDB</p>
      <p>Used Socket.io to establish realtime communication between users.</p>
      <p>Created a friend recommendation engine using MongoDB's aggregation framework.</p>
      <h2>Parking Application</h2>
      <p2>August 2020<a target="_blank" href="https://github.com/4bdulWadood/Coe528-Design-Project"><button className = "button">Project</button></a><a target="_blank" href="https://www.loom.com/share/4dbc6771b5c24cb7a78d0d69d25517c9?fbclid=IwAR3uR7wPCf7Py3JggJalPxfPdpDG5xbn2p0Auk4nHe6b49QBdndHmafhupI"><button className = "button">Demo</button></a></p2>
      <p>Utilized Java, OOP, and UML diagrams to develop kiosk application for car parking facility</p>
      <p>Developed user interface with JavaFX</p>
      </div>
    )
    }
    </Spring>
  );
}
const hStyle = { color: 'red' };

const props2 = { height: '2rem' };

export default App;
