import React from 'react';
import {Spring} from 'react-spring/renderprops';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";
import {Link} from 'react-router-dom';
import pdf from './Resume.pdf';
import img from './bg.jpg';

const onClick1=(link)=>{
  window.open(
    `https://github.com/4bdulWadood`,
    '_blank' 
  );
}


const onClick3=(link)=>{
  window.open(
    `https://www.linkedin.com/in/syed-wadood-6b083861/`,
    '_blank' 
  );
}



function App() {
  return (
    <Spring
      from={{opacity: 0,marginLeft: -500 }}
      to={{opacity: 1, marginLeft: 0 }}
      delay={500}
    >
    {props => (
      <div style={props} className="left">
      <img className="image" src={img} />
      <div className="style1">
      <div style={c1Style}>
        <h1 style={{"font-family": "Tavisha", "font-size": "2.75rem"}}><div className="resizeHeight">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            delay={800}
            >
            {props => <div style={{...props, marginTop: "-15%"}}>Hi, I'm Syed.</div>}
            
          </Spring></div></h1>
      </div>
      <div className="social">
      <div style={height}>
      <button style={buttonStyle} onClick={onClick1}><FaGithubSquare size={30}/></button> 
      <form method="get" action={pdf} target="_blank"><button style={buttonStyle}><IoMdDownload size={30}/></button></form>
      <button style={buttonStyle} onClick={onClick3}><FaLinkedin size={30}/></button>    
      </div>
      </div>
      </div>
      </div>
    )
    }
    </Spring>
  )
}

const c1Style = {
  color: '#f5f5f5',
  margin: "-10.7rem 0 0 0",
  marginTop: "-10%"
}

const height = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#622e2e",
  border: "none",
  outline: "none",
  marginLeft: "-62%",
  justifyContent: "center",
  marginTop: "-50%"
}

const buttonStyle = {
  backgroundColor: "#622e2e", 
  border: "none",
  outline: "none"
}

export default App;
