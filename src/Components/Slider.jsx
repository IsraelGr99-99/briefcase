import React from "react";
import CSS from '../assets/logo-css.png'
import HTML from '../assets/logo-html.png'
import JS from '../assets/logo-js.png'
import Github from '../assets/logo-github.png'
import Bootstrap from '../assets/logo-bootstrap.png'
import MySQL from '../assets/logo-mysql.png'
import Python from '../assets/logo-python.png'
import ReactLogo from '../assets/logo-react.png'
import SweetAlert from '../assets/logo-sweetAlert.png'
import '../stylesheets/slider.css'

function Slider() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={CSS} alt="CSS" />
        </div>
        <div className="slide">
          <img src={HTML} alt="HTML" />
        </div>
        <div className="slide">
          <img src={JS} alt="JS" />
        </div>
        <div className="slide">
          <img src={Github} alt="Github" />
        </div>
        <div className="slide">
          <img src={Bootstrap} alt="Bootstrap" />
        </div>
        <div className="slide">
          <img src={MySQL} alt="MySQL" />
        </div>
        <div className="slide">
          <img src={Python} alt="Python" />
        </div>
        <div className="slide">
          <img src={ReactLogo} alt="React" />
        </div>
        <div className="slide">
          <img src={SweetAlert} alt="SweetAlert" />
        </div>
        
      </div>
    </div>
  );
}

export default Slider;
