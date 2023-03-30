import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Skills from "../helpers/Skills";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Ajithkumar</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon
            className="social-btn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/ajithkumar-u-76712b224")
            }
          />
          <EmailIcon
            onClick={() => (window.location = "mailto:ajith081097@gmail.com")}
            className="social-btn"
          />
          <GithubIcon
            onClick={() => window.open("https://github.com/cuajith")}
            className="social-btn"
          />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list-style">
          {Skills.map(item => 
          <li className="item">
            <img src={item.image} alt={item.title}/>
            <p>{item.title}</p>
          </li>
          )}
        </ol>
      </div>
    </div>
  );
}

export default Home;
