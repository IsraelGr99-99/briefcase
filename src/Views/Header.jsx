import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../stylesheets/header.css";
import Link from "../Components/Link";
import headerPhoto from "../assets/header-phot.avif";
import ArrowUp from "../Components/ArrowUp";
import Aos from "aos";
function Header() {

  useEffect(()=>{
    Aos.init({duration:2000});
  });

  return (
    <header className="col-12  container-fluid header p-0" id="header">
      <Navbar />
      <div className="col-12  container-header">
        <div className="col-md-6 saludo">
          <h1 data-aos="fade">
            <strong className="header-h1">{`<h1>`}</strong>
            {`Hola soy Israel, fullstack developer`}
            <strong className="header-h1">{`<h1>`}</strong>{" "}
          </h1>
          <div className="div-btn-header d-flex justify-content-around">
            <Link
              href="mailto:isr.gr1999@outlook.com"
              className="email-link"
              icon="at"
              text=" Correo"
              ariaLabel='botón enviar correo'
            />
            <Link
              href="./Israel_Garcia_CV.pdf"
              className="download-cv"
              icon="file-arrow-down"
              text=" CV"
              download={true}
              ariaLabel='boton descarga cv'
            />
          </div>
        </div>
        <div className="col-md-6 img-header" >
          <div className="div-header-photo"  data-aos="flip-up">
            <img className="img-fluid" src={headerPhoto} alt="header-foto"/>
          </div>
        </div>
      </div>
      <ArrowUp />
    </header>
  );
}

export default Header;
