import React from "react";
import "../stylesheets/skills.css";
import Circle from "../Components/Circle";

function Skills() {
  return (
    <div className="container-fluid p-0 skills" id="skill">
      <div className="col-md-4 col-12  cont-circle-left">
        <Circle style="bumbble-github" logo="Github" alt="github" />
        <Circle style="bumbble-html" logo="Html" alt="html" />
        <Circle style="bumbble-js" logo="Js" alt="js" />
      </div>
      <div className="col-md-4 col-12  cont-skill">
        <div className="skill">
          <div className=" col-12">
            <span>const </span>
            <span> skill </span>
            <span>= </span>
            <span>{` {`}</span>
          </div>
          <div className="col-12 language">
            <span>lenguajes: </span>
            <span>{` [`}</span>
            <span>{`"HTML",`}</span>
            <span>{`"CSS",`}</span>
            <span>{`"JS",`}</span>
            <span>{`"Python"],`}</span>
          </div>
          <div className="col-12 library">
            <span> frameworksYLibrerias: </span>
            <span>{` [`}</span>
            <span>{`"React",`}</span>
            <span>{`"Bootstrap",`}</span>
            <span>{`"SweetAlert",`}</span>
            <span>{`"Python"],`}</span>
          </div>
          <div className=" col-12 control-version" > 
          <span> controlDeVersiones: </span>
          <span>{` [`}</span>
          <span>{`"Github",`}</span>
          <span>{`"GitLab"]`}</span>
          <span>{` }`}</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-12  cont-circle-rigth">
        <Circle style="bumbble-react" logo="React" alt="react" />
        <Circle style="bumbble-bootstrap" logo="Bootstrap" alt="bootstrap" />
        <Circle style="bumbble-python" logo="Python" alt="python" />
        <Circle style="bumbble-sweetAlert" logo="SweetAlert" alt="sweetAlert" />
      </div>
    </div>
  );
}

export default Skills;
