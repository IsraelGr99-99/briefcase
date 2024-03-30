import React from "react";
import "../stylesheets/skills.css";
import Circle from "../Components/Circle";

function Skills() {
  return (
    <div className="container-fluid p-0 skills">
      <div className="col-md-4 cont-circle-left">
        <Circle style="bumbble-github" logo="Github" alt="github" />
        <Circle style="bumbble-html" logo="Html" alt='html' />
        <Circle style="bumbble-js" logo="Js"  alt='js'/>
      </div>
      <div className="col-md-4 cont-skill">
        <div className="skill"></div>
      </div>
      <div className="col-md-4 cont-circle-rigth">
        <Circle style="bumbble-react" logo="React"  alt='react' />
        <Circle style="bumbble-bootstrap" logo="Bootstrap" alt='bootstrap'/>
        <Circle style="bumbble-python" logo="Python" alt='python' />
        <Circle style='bumbble-sweetAlert' logo='SweetAlert' alt='sweetAlert'/>
      </div>
    </div>
  );
}

export default Skills;
